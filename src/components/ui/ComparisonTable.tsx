import { Check, X } from "lucide-react";
import { COMPARISON_ROWS } from "@/lib/data/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto text-accent-emerald" size={18} />
    ) : (
      <X className="mx-auto text-ink-faint" size={18} />
    );
  }
  return <span className="text-sm text-ink-muted">{value}</span>;
}

/** Full feature-by-feature comparison across Starter / Standard / Enterprise. */
export function ComparisonTable() {
  return (
    <RevealOnScroll>
      <div className="glass rounded-xl2 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b border-line">
              <th className="p-5 font-mono text-xs uppercase tracking-wide text-ink-faint">Feature</th>
              <th className="p-5 font-display text-sm font-semibold text-ink text-center">Starter</th>
              <th className="p-5 font-display text-sm font-semibold text-ink text-center">
                <span className="text-signal">Standard</span>
              </th>
              <th className="p-5 font-display text-sm font-semibold text-ink text-center">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 0 ? "bg-white/[0.015]" : ""}>
                <td className="p-5 text-sm text-ink-muted">{row.feature}</td>
                <td className="p-5 text-center">
                  <Cell value={row.starter} />
                </td>
                <td className="p-5 text-center">
                  <Cell value={row.standard} />
                </td>
                <td className="p-5 text-center">
                  <Cell value={row.enterprise} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </RevealOnScroll>
  );
}
