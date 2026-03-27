import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export interface ButtonStat {
    count: number;
    lastClick: string | null;
}

export const BUTTON_LABELS: Record<string, string> = {
    stickyCall: 'Sticky Call Button',
    navigationCall: 'Navigation Call Button',
    productCall: 'Produkt Call Button',
};

export function getLabel(key: string): string {
    return BUTTON_LABELS[key] ?? key;
}

export function useAdminDashboard() {
    const router = useRouter();
    const [viewCount, setViewCount] = useState<number | null>(null);
    const [lastVisit, setLastVisit] = useState<string | null>(null);
    const [buttonClicks, setButtonClicks] = useState<Record<string, ButtonStat>>({});

    useEffect(() => {
        fetch('/api/views')
            .then((r) => r.json())
            .then((d) => { setViewCount(d.viewCount); setLastVisit(d.lastVisit); })
            .catch(console.error);

        fetch('/api/button-tracking')
            .then((r) => r.json())
            .then((d) => setButtonClicks(d.buttonClicks ?? {}))
            .catch(console.error);
    }, []);

    const handleLogout = async () => {
        await fetch('/api/admin/logout');
        router.push('/admin/login');
    };

    const resetButtonStats = async (buttonType: string) => {
        try {
            const res = await fetch('/api/button-tracking', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ buttonType }),
            });
            if (res.ok) {
                const data = await res.json();
                setButtonClicks(data.buttonClicks);
            }
        } catch (err) {
            console.error('Reset-Fehler:', err);
        }
    };

    const totalClicks = Object.values(buttonClicks).reduce((s, b) => s + b.count, 0);
    const buttonEntries = Object.entries(buttonClicks);

    return {
        viewCount,
        lastVisit,
        buttonClicks,
        totalClicks,
        buttonEntries,
        handleLogout,
        resetButtonStats,
    };
}
