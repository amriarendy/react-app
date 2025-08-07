import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import Blank from "../../../organisms/panel/templates/Blank";

const BlankView = ({ breadCrumbs }) => {
    return (
        <>
                    <Breadcrumbs breadCrumbs={breadCrumbs} />
                    <Blank />
        </>
    )
}

export default BlankView;