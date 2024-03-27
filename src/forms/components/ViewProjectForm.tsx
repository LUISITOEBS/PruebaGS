import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from './Button';
import { Input } from './Input';


export const ViewProjectForm = () => {
    const formik = useFormik({
        initialValues: {
            idProject: '',
            nameProject: '',
            projectDescription: '',
            startDate: '',
            endDate: '',
            capex: '',
            opex: '',
            pillar: '',
            clasification: ''
        },
        onSubmit: values => {
            console.log( values );
        },
        validationSchema: Yup.object({
            idProject: Yup.string()
                        .max(10, 'Debe de tener 10 caracteres o menos')
                        .required('Requerido'),
            nameProject: Yup.string()
                         .max(10, 'Debe de tener 10 caracteres o menos')
                         .required('Requerido'),
            projectDescription: Yup.string()
                        .max(10, 'Debe de tener 10 caracteres o menos')
                         .required('Requerido'),
            startDate: Yup.string()
                        .max(10, 'Debe de tener 10 caracteres o menos')
                        .required('Requerido')
                        .test('is-after-today', 'La fecha de inicio debe ser igual o posterior a hoy', function(value) {
                            const today = new Date();
                            const todayFormatted = today.toISOString().slice(0, 10);
                            return value >= todayFormatted;
                        }),
            endDate: Yup.string()
                        .max(10, 'Debe tener 10 caracteres o menos')
                        .required('Requerido')
                        .test('is-after-start', 'La fecha de fin debe ser igual o posterior a la fecha de inicio', function(value) {
                            const { startDate } = this.parent;
                            return value >= startDate;
                        })
        })
    });

    const { handleSubmit, touched, errors, getFieldProps } = formik;

    return (
        <div>
            <form action="" noValidate onSubmit={ handleSubmit }>
                <div className='d-flex flex-row'>
                    <div className='w-50'>
                        <Input
                            classNameInput='form-control form-control-sm'
                            classNameLabel='form-check-label mt-3'
                            label='ID Proyecto'
                            type='text'
                            getFieldProps={ getFieldProps('idProject') }
                            touched={touched['idProject'] }
                            errors={errors['idProject'] }
                            placeholder='Escribe el número de ID Proyectos Sipres'
                        />
                    </div>
                    <div className='d-flex w-50 align-items-end ms-4'>
                        <Button type='button' text="Buscar Proyecto" />
                    </div>
                </div>
            
                <div>
                    <Input
                        classNameInput='form-control form-control-sm'
                        classNameLabel='form-check-label mt-3'
                        label='Nombre del proyecto'
                        type='text'
                        getFieldProps={ getFieldProps('nameProject') }
                        touched={touched['nameProject'] }
                        errors={errors['nameProject'] }
                        placeholder=''
                        disabled={ true }
                    />
                </div>

                <div>
                    <Input
                        classNameInput='form-control form-control-sm'
                        classNameLabel='form-check-label mt-3'
                        label='Descripción del proyecto'
                        type='text'
                        getFieldProps={ getFieldProps('projectDescription') }
                        touched={touched['projectDescription'] }
                        errors={errors['projectDescription'] }
                        placeholder=''
                        disabled={ true }
                    />
                </div>


            
                <div className='d-flex flex-row'>
                    <div className='w-50 me-4'>
                        <Input
                            classNameInput='form-control form-control-sm'
                            classNameLabel='form-check-label mt-3'
                            label="Fecha Inicio"
                            type='date'
                            getFieldProps={ getFieldProps('startDate') }
                            touched={touched['startDate'] }
                            errors={errors['startDate'] }
                            placeholder=''
                            disabled={ true }
                        />
                    </div>
                    <div className='w-25 me-4'>
                        <Input
                            classNameInput='form-control form-control-sm'
                            classNameLabel='form-check-label mt-3'
                            label="Capex"
                            type='text'
                            getFieldProps={ getFieldProps('capex') }
                            touched={touched['capex'] }
                            errors={errors['capex'] }
                            placeholder=''
                            disabled={ true }
                        />
                    </div>
                    <div className='w-25'>
                        <Input
                            classNameInput='form-control form-control-sm'
                            classNameLabel='form-check-label mt-3'
                            label="Opex"
                            type='text'
                            getFieldProps={ getFieldProps('opex') }
                            touched={touched['opex'] }
                            errors={errors['opex'] }
                            placeholder=''
                            disabled={ true }
                        />
                    </div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='w-50 me-4'>
                        <Input
                            classNameInput='form-control custom-input'
                            classNameLabel='form-check-label mt-3'
                            label="Pilar del Proyecto"
                            type='text'
                            getFieldProps={ getFieldProps('pillar') }
                            touched={touched['pillar'] }
                            errors={errors['pillar'] }
                            placeholder=''
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            classNameInput='form-control custom-input'
                            classNameLabel='form-check-label mt-3'
                            label="Clasificación Comité de Inversión"
                            type='text'
                            getFieldProps={ getFieldProps('capex') }
                            touched={touched['capex'] }
                            errors={errors['capex'] }
                            placeholder=''
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
