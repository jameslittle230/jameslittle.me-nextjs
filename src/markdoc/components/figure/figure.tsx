import classnames from "classnames";

const Figure = ({ caption, layout, children }: any) => {
    return <figure className={classnames("figure", layout)}>{children}{caption && <figcaption>{caption}</figcaption>}</figure>;
};

export default Figure;
