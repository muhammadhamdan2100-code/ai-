"use client";

import { useMemo, useState } from "react";
import { Search, Plug } from "lucide-react";
import { INTEGRATIONS, INTEGRATION_CATEGORIES } from "@/lib/data/integrations";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

/** Searchable, filterable grid of genuinely-supported integrations. */
export function IntegrationsHub() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return INTEGRATIONS.filter((i) => {
      const matchesQuery = i.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category ? i.category === category : true;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div>
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search integrations…"
            className="w-full bg-white/[0.03] border border-line rounded-full pl-11 pr-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent-violet transition-colors"
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setCategory(null)}
            className={`font-mono text-xs rounded-full px-3 py-1.5 border transition-colors ${
              category === null
                ? "border-accent-violet text-ink bg-accent-violet/10"
                : "border-line text-ink-muted hover:text-ink"
            }`}
          >
            All
          </button>
          {INTEGRATION_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat === category ? null : cat)}
              className={`font-mono text-xs rounded-full px-3 py-1.5 border transition-colors ${
                category === cat
                  ? "border-accent-violet text-ink bg-accent-violet/10"
                  : "border-line text-ink-muted hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((integration, i) => (
          <RevealOnScroll key={integration.name} delay={(i % 8) * 0.03}>
            <div className="glass rounded-xl2 p-5 text-center hover:border-line-strong transition-colors h-full flex flex-col items-center justify-center gap-3">
              <span className="h-10 w-10 rounded-lg bg-signal-gradient-soft border border-line flex items-center justify-center text-accent-cyan">
                <Plug size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{integration.name}</p>
                <p className="mt-1 font-mono text-[10px] text-ink-faint">{integration.category}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-ink-faint">
          No integrations match &quot;{query}&quot; — try a different search or clear the filter.
        </p>
      )}
    </div>
  );
}
