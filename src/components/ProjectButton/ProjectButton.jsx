import css from "./ProjectButton.module.css"

export const ProjectButton = ({ children }) => {
    return <button className={css.button} type="submit">{children}</button>
}