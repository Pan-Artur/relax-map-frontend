import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fetchReviews = async () => [
    {
        id: 1,
        rating: 5,
        text: "Неймовірні краєвиди та спокійна атмосфера — одне з моїх найулюбленіших місць в Україні.",
        author: "Олена Коваль",
        locationType: "Болота",
    },
    {
        id: 2,
        rating: 5,
        text: "Чудове місце для відпочинку на природі: чисте повітря, мальовничі пагорби та спокійна річка.",
        author: "Ігор Петров",
        locationType: "Карпати",
    },
    {
        id: 3,
        rating: 5,
        text: "Тут відчуваєш гармонію та справжню силу української природи.",
        author: "Ігор Шевченко",
        locationType: "Місце",
    },
];

const Stars = ({ value }) => (
    <div className="flex gap-1 text-sm">
        {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < value ? "★" : "☆"}</span>
        ))}
    </div>
);

export function ReviewsBlock() {
    const [reviews, setReviews] = useState([]);
    const [index, setIndex] = useState(0);


    useEffect(() => {
        fetchReviews().then(setReviews);
    }, []);


    const next = () => setIndex((p) => Math.min(p + 1, reviews.length - 1));
    const prev = () => setIndex((p) => Math.max(p - 1, 0));


    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold mb-6">Останні відгуки</h2>


            <div className="relative overflow-hidden">
                <motion.div
                    animate={{ x: -index * 360 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="flex gap-6"
                >
                    {reviews.map((r) => (
                        <div
                            key={r.id}
                            className="bg-[#fde7db] rounded-2xl p-5 shadow-sm min-w-[340px]"
                        >
                            <Stars value={r.rating} />
                            <p className="text-sm my-3">{r.text}</p>
                            <p className="font-semibold">{r.author}</p>
                            <span className="text-xs opacity-60">{r.locationType}</span>
                        </div>
                    ))}
                </motion.div>


                <div className="flex justify-end gap-2 mt-4">
                    <button onClick={prev} className="p-2 rounded-lg border">
                        <ChevronLeft size={18} />
                    </button>
                    <button onClick={next} className="p-2 rounded-lg border">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}