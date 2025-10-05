"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { CheckCircle2, Filter, Sparkles } from "lucide-react"

export type Lead = {
  id: string
  name: string
  company: string
  channel: "Website" | "Referral" | "Ads" | "Email" | "Event"
  size: "1-10" | "11-50" | "51-200" | "200+"
  lastSeenMins: number
  visitedPricing: boolean
  repliedHours?: number
}

const seedLeads: Lead[] = [
  { id: "L-1001", name: "Adaobi O.", company: "Novatek", channel: "Website", size: "51-200", lastSeenMins: 5, visitedPricing: true, repliedHours: 2 },
  { id: "L-1002", name: "Kunle B.", company: "BrightLabs", channel: "Referral", size: "11-50", lastSeenMins: 42, visitedPricing: true, repliedHours: 6 },
  { id: "L-1003", name: "Zainab T.", company: "UrbanFit", channel: "Ads", size: "1-10", lastSeenMins: 18, visitedPricing: false },
  { id: "L-1004", name: "Chinedu K.", company: "PayGrid", channel: "Website", size: "200+", lastSeenMins: 2, visitedPricing: true, repliedHours: 1 },
]

function scoreLead(lead: Lead) {
  let score = 0
  const reasons: string[] = []

  if (lead.visitedPricing) { score += 35; reasons.push("Visited pricing") }
  if (lead.channel === "Referral") { score += 25; reasons.push("Channel: Referral") }
  if (lead.channel === "Website") { score += 15; reasons.push("Channel: Website") }
  if (lead.size === "51-200") { score += 12; reasons.push("Firm size 51–200") }
  if (lead.size === "200+") { score += 18; reasons.push("Enterprise 200+") }
  if (lead.lastSeenMins <= 10) { score += 20; reasons.push("Active in last 10m") }
  if (lead.repliedHours !== undefined && lead.repliedHours <= 3) { score += 15; reasons.push("Replied in ≤3h") }

  score = Math.min(100, score)
  const tier = score >= 80 ? "A" : score >= 60 ? "B" : "C"
  return { score, tier, reasons }
}

export function LeadScorerDemo() {
  const [leads, setLeads] = useState<Lead[]>(seedLeads)
  const [filterMin, setFilterMin] = useState<number>(80)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const timerRef = useRef<number | null>(null)

  // stream a new mock lead every few seconds
  useEffect(() => {
    const channels: Lead["channel"][] = ["Website", "Referral", "Ads", "Email", "Event"]
    const sizes: Lead["size"][] = ["1-10", "11-50", "51-200", "200+"]

    timerRef.current = window.setInterval(() => {
      const idx = Math.floor(Math.random() * 10000)
      const lead: Lead = {
        id: `L-${Date.now().toString().slice(-6)}-${idx}`,
        name: ["Tunde", "Ngozi", "Ife", "Maryam", "Dare", "Seyi"][Math.floor(Math.random()*6)] + " " + ["A.", "B.", "C.", "D."][Math.floor(Math.random()*4)],
        company: ["SwiftByte", "HealthNow", "AeroSoft", "FarmLink", "TradeWise"][Math.floor(Math.random()*5)],
        channel: channels[Math.floor(Math.random() * channels.length)],
        size: sizes[Math.floor(Math.random() * sizes.length)],
        lastSeenMins: Math.floor(Math.random() * 60),
        visitedPricing: Math.random() > 0.5,
        repliedHours: Math.random() > 0.6 ? Math.floor(Math.random() * 8) : undefined,
      }
      setLeads(prev => [lead, ...prev].slice(0, 25))
    }, 6000)

    return () => { if (timerRef.current) window.clearInterval(timerRef.current) }
  }, [])

  const scored = useMemo(() => leads.map(l => ({ lead: l, ...scoreLead(l) })), [leads])
  const filtered = scored.filter(s => s.score >= filterMin)
  const selected = scored.find(s => s.lead.id === selectedId) ?? filtered[0] ?? scored[0]

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-semibold text-gray-900">Live Lead Inbox</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Filter className="w-4 h-4 text-gray-500" />
          <label className="text-gray-600">Focus ≥{filterMin}</label>
          <input
            type="range"
            min={50}
            max={90}
            value={filterMin}
            onChange={(e) => setFilterMin(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {scored.map(({ lead, score, tier, reasons }) => (
            <button
              key={lead.id}
              onClick={() => setSelectedId(lead.id)}
              className={`w-full text-left border rounded-xl px-3 py-3 transition-colors ${
                score >= filterMin ? "bg-green-50 border-green-200" : "bg-white border-gray-200"
              } ${selected?.lead.id === lead.id ? "ring-2 ring-blue-500" : "hover:bg-gray-50"}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{lead.name} • {lead.company}</div>
                  <div className="text-xs text-gray-500">{lead.channel} • {lead.size} • last seen {lead.lastSeenMins}m ago</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    tier === "A" ? "bg-blue-50 text-blue-700" : tier === "B" ? "bg-amber-50 text-amber-700" : "bg-gray-100 text-gray-700"
                  }`}>Tier {tier}</span>
                  <span className="text-lg font-extrabold text-gray-900">{score}</span>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {reasons.slice(0, 3).map(r => (
                  <span key={r} className="text-[11px] px-2 py-1 rounded-full bg-gray-100 text-gray-700">{r}</span>
                ))}
              </div>
            </button>
          ))}
        </div>

        <div className="border rounded-2xl p-4 bg-gray-50">
          {selected ? (
            <div>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-semibold text-gray-900">{selected.lead.name} • {selected.lead.company}</div>
                  <div className="text-xs text-gray-500">{selected.lead.channel} • {selected.lead.size}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Score</div>
                  <div className="text-2xl font-extrabold text-gray-900">{selected.score}</div>
                </div>
              </div>
              <div className="mb-3">
                <div className="text-xs font-semibold text-gray-700 mb-1">Why this score</div>
                <div className="flex flex-wrap gap-1">
                  {selected.reasons.map(r => (
                    <span key={r} className="text-[11px] px-2 py-1 rounded-full bg-white border border-gray-200 text-gray-700">{r}</span>
                  ))}
                </div>
              </div>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">
                <CheckCircle2 className="w-4 h-4" /> Send to Sales
              </button>
            </div>
          ) : (
            <div className="text-sm text-gray-600">No lead selected.</div>
          )}
        </div>
      </div>
    </div>
  )
}





