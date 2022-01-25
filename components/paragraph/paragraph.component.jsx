import { ParagraphStyle } from "./paragraph.styles"

export const Paragraph = ({ text }) => {
    console.log(text)
    return (
        <ParagraphStyle>{text}</ParagraphStyle>
    )
};