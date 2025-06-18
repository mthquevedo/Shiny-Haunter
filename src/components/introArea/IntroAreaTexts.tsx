interface introTextsProps {
    title: string;
    description: string;
}

export function IntroAreaTexts({ title, description }: introTextsProps) {
    return (
        <div className="md:w-[95%] lg:w-[80%]">
            <h2 className="text-lg md:text-xl font-bold text-primary mb-1">{title}</h2>
            <p className="text-[0.75rem] xsm:text-sm md:text-base lg:text-sm 2xl:text-base text-darkgray lg:w-[80%]">{description}</p>
        </div>
    )
}