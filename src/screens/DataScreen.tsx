import { FormCard } from "../components/FormCard";
import { RegisterNewProject } from "../forms/components/RegisterNewProject";
import { ViewProjectForm } from "../forms/components/ViewProjectForm";

export const DataScreen = () => {
    return (
        <div className="w-100 mt-3">
            <div className="row">
                <div className="col-md-6">
                    <FormCard className="card-no-border">
                        <RegisterNewProject />
                    </FormCard>
                </div>
                <div className="col-md-6 mt-4">
                    <FormCard className="blue-card">
                        <ViewProjectForm />
                    </FormCard>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default DataScreen;