import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface Props {
    to: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    toRange?: number;
}

function easeOut(t: number): number {
    return 1 - Math.pow(1 - t, 3);
}

const AnimatedCounter = ({ to, prefix = '', suffix = '', duration = 1.8, toRange }: Props) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!inView || !ref.current) return;

        const node = ref.current;
        const durationMs = duration * 1000;
        const startTime = performance.now();

        let raf: number;

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            const value = Math.round(easeOut(progress) * to);

            node.textContent = `${prefix}${value}${suffix}`;

            if (progress < 1) {
                raf = requestAnimationFrame(tick);
            } else if (toRange !== undefined) {
                node.textContent = `${prefix}${to} bis ${toRange}${suffix}`;
            }
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, to, prefix, suffix, duration, toRange]);

    return <span ref={ref}>{prefix}0{suffix}</span>;
};

export default AnimatedCounter;
