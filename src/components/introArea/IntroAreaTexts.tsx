interface introTextsProps {
    title: string;
    description: string;
}

export function IntroAreaTexts({ title, description }: introTextsProps) {
    return (
        <div>
            <p className="text-xl font-bold text-primary mb-1">{title}</p>
            <p className="text-darkgray">{description}</p>
        </div>
    )
}