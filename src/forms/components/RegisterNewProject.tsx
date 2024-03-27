import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from './Button';
import { Input } from './Input';
import { Select } from './Select';
import { projectGoals } from '../fakeAPI/fakeSelects';

export const RegisterNewProject = () => {
    const formik = useFormik({
        initialValues: {
            idProject: '',
            nameProject: '',
            projectDescription: '',
            projectGoal: '',
            startDate: '',
            endDate: '',
        },
        onSubmit: values => {
            console.log( values );
        },
        validationSchema: Yup.object({
            nameProject: Yup.string()
                         .max(10, 'Debe de tener 10 caracteres o menos')
                         .required('Requerido'),
            projectDescription: Yup.string()
                        .max(10, 'Debe de tener 10 caracteres o menos')
                         .required('Requerido'),
            projectGoal: Yup.string()
                        .notOneOf(['0'], 'No puedes seleccionar la primera opción')
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
                <div className=''>
                    <Input
                        classNameInput='form-control form-control-sm'
                        classNameLabel='form-check-label mt-3'
                        label="ID Sistema ORC's"
                        type='text'
                        getFieldProps={ getFieldProps('idProject') }
                        touched={touched['idProject'] }
                        errors={errors['idProject'] }
                        placeholder='0'
                        disabled={ true }
                    />
                </div>
               
                <div>
                    <Input
                        classNameInput='form-control form-control-sm'
                        classNameLabel='form-check-label mt-3'
                        label="Nombre del proyecto"
                        type='text'
                        getFieldProps={ getFieldProps('nameProject') }
                        touched={touched['nameProject'] }
                        errors={errors['nameProject'] }
                        placeholder=''
                    />
                </div>

                <div>
                    <Input
                        classNameInput='form-control form-control-sm'
                        classNameLabel='form-check-label mt-3'
                        label="Descripción del proyecto"
                        type='text'
                        getFieldProps={ getFieldProps('projectDescription') }
                        touched={touched['projectDescription'] }
                        errors={errors['projectDescription'] }
                        placeholder=''
                    />
                </div>


                <div>
                    <Select
                        classNameSelect='form-select'
                        getFieldProps={ getFieldProps('projectGoal') }
                        touched={touched['projectGoal'] }
                        errors={errors['projectGoal'] }
                    >
                        { 
                            projectGoals.map( option => (
                                <option key={ option.value } value={ option.value }>{ option.text }</option>
                            ))
                        }
                    </Select>
                </div>


              
                <div className='d-flex flex-row'>
                    <div className='w-50 me-4'>
                        {/* <Image className='ms-2 icon-size' src={ informationIcon } alt='required' /> */}
                        <Input
                            classNameInput='form-control form-control-sm'
                            classNameLabel='form-check-label mt-3'
                            label="Fecha Inicio"
                            type='date'
                            getFieldProps={ getFieldProps('startDate') }
                            touched={touched['startDate'] }
                            errors={errors['startDate'] }
                            placeholder=''
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            classNameInput='form-control form-control-sm'
                            classNameLabel='form-check-label mt-3'
                            label="Fecha Fin"
                            type='date'
                            getFieldProps={ getFieldProps('endDate') }
                            touched={touched['endDate'] }
                            errors={errors['endDate'] }
                            placeholder=''
                        />
                    </div>
                </div>

                <br /><br />
                <Button type='submit' text="Prioridad de proyecto" />
            </form>
        </div>
    )
}
