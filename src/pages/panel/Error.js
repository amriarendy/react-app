import Card from "../../components/card/Card";
import Errors from "../../components/errors/Errors";
import PanelLayout from "./PanelLayout"

const ErrorPage = () => {
    return (
        <>
            <PanelLayout>
                <div className="col-span-3">
                <Card>
                    <Errors />
                </Card>
                </div>
            </PanelLayout>
        </>
    )
}

export default ErrorPage;