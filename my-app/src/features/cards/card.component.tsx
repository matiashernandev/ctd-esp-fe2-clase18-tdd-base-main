import { FC } from "react";
import { Character } from "../../types/character.types";

export type CardProps = {
    character: Character
}

const Card: FC<CardProps> = ({ character }: CardProps) => {

    const { name, image, followers } = character

    return <div>
        <h1>{name}</h1>
        <img src={image || ""} alt={image ? name : ""} />
        <h3>{followers ? `${followers} followers` : "No followers yet"}</h3>
    </div>
}

export default Card;