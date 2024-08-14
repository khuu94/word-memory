import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function CreateGameForm({ score }: { score: number | null }) {
    const [formData, setFormData] = useState({ playerName: "", score });
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            const response = await fetch("/api/games", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to create game");
            }

            router.push("/");
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-reno-sand-200 rounded-xl my-8 p-4">
            <h2 className="font-bold mb-4">Record Your Score?</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="playerName"
                    value={formData.playerName}
                    onChange={handleInputChange}
                    placeholder="Your name..."
                    className="border placeholder-reno-sand-200 border-reno-sand-300 rounded-xl px-4 p-2 outline-none focus-within:border-reno-sand-100"
                />
                <button
                    className="text-white rounded-xl p-2 bg-reno-sand-900 hover:bg-reno-sand-950 cursor-pointer transition-all duration-150 ease-linear
                    disabled:bg-reno-sand-400 disabled:text-reno-sand-100"
                    type="submit"
                    disabled={isLoading || formData.playerName === ""}
                >
                    {isLoading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}
