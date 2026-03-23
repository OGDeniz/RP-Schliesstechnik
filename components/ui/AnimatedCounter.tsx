import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

interface Props {
    to: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
}

const AnimatedCounter = ({ to, prefix = '', suffix = '', duration = 1.8 }: Props) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!inView || started || !ref.current) return;
        setStarted(true);

        const node = ref.current;
        const controls = animate(0, to, {
            duration,
            ease: 'easeOut',
            onUpdate(value) {
                node.textContent = `${prefix}${Math.round(value)}${suffix}`;
            },
        });

        return () => controls.stop();
    }, [inView, started, to, prefix, suffix, duration]);

    return (
        <span ref={ref}>
            {prefix}0{suffix}
        </span>
    );
};

export default AnimatedCounter;
