import React from 'react';
import { Link } from "react-router-dom";
import "../../assets/css/loginPage.css"

//! voir tutos https://www.youtube.com/watch?v=9T9z_qrrybY&list=PLQRpAiZalzY_MaSrQ6QKiDfs8wsq26JPv&index=7

// doc https://formik.org/docs/overview
// yarn add formik or  npm install formik --save
import { useFormik } from 'formik'

// doc https://github.com/jquense/yup
// yarn add yup  
import * as Yup from 'yup';


//! Gestion des erreurs et validation du form par Yup 
// créer un schéma (=objet) qui va contenir la validation que l'on souhaite obtenir à chaque champ
const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'must be 3+ characters')
        .max(20, 'must be 20 characters or less')
        .required('le nom est obligatoire'),
    email: Yup.string()
        .email('Email is invalid')
        .required(`l'email est obligatoire`),
    giturl: Yup.string()
        .url()
        .required(`l'url de votre page est obligatoire`),
    cgu: Yup.boolean().oneOf([true])
        .required('veuillez accepter les conditions générales d\'utilisation')
})

const SignupPage = () => {

    // console.log("formik: ", formik); // remarquons la propriété 'touched' pr savoir le form a été touché ou pas
    // console.log("formik.touched: ", formik.touched);
    // console.log("formValues: ", formik.values);
    // console.log("formik.errors: ", formik.errors);

    const initialValues = { // formik est lié à l'attribut name du formulaire
        name: '',
        email: '',
        giturl: '',
        cgu: false
    };

    const handleSubmitForm = async (formValues, onSubmittingProps) => { // fonction responsable de la soumission du formulaire, prend en paramètre les valeurs du formulaire
        console.log('onSubmittingProps --> ', onSubmittingProps);
        onSubmittingProps.resetForm();
        try {
            const response = await formSubmission(formValues);
            console.log('formSubmission response --> ', response);
        } catch (error) {
            console.log('error: ', error);
            console.error(error);
        }
    };

    //! si validation avec Yup, commenter le validate de Formik
    // const validate = (formValues) => { // fonction qui prend en paramètre les valeurs du formulaire

    //     const errors = {}

    //     if (formValues.name === "") {
    //         errors.name = 'le nom est obligatoire'
    //     }
    //     if (formValues.email === "") {
    //         errors.email = 'l\'email est obligatoire'
    //     }
    //     if (formValues.giturl === "") {
    //         errors.giturl = `l'adresse de votre GitHub est obligatoire`
    //     }
    //     if (!formValues.cgu) {
    //         errors.cgu = 'veuillez accepter les conditions générales d\'utilisation'
    //     }
    //     return errors;
    // }

    // console.log("formik.errors ", formik.errors);


    const formik = useFormik({
        initialValues,  // useFormik({}) // prend un objet en paramètre, que nous détaillons plus haut pr + de lisibilité
        onSubmit: handleSubmitForm, // la clé onSubmit attend une fonction responsable de la soumission du formulaire, que nous écrirons plus haut
        // validate //! formik execute la fonction validate avant le onSubmit, donc on fait la gestion des erreurs dans validate
        validationSchema //! dire à formik d'utiliser la validation de Yup (validationSchema) et non plus son validate
    });


    //! Simuler la réponse d'un backend/API
    const formSubmission = (formData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('😀 User registered ! 😀 ')
            }, 2000)
        })
    }




    // on peut déstructurer formik.values
    // const { name, email, giturl, cgu } = formik.values
    return (<>

        <form onSubmit={formik.handleSubmit} className="form">

            <h2>SignupPage</h2>

            <label htmlFor="name">Name</label>  {/*  formik.values attends l'attribut name="" */}
            <input type='text' id='name' name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur} // lorsque je quitte l'input, 'touched' passe à True
            />

            {/* affiche un msg d'erreur si une erreur est détecté ET SI le champ/l'input a été touché*/}
            {formik.errors.name && formik.touched.name &&
                <span style={{ color: "red", fontSize: "13px" }}>{formik.errors.name}</span>
            }

            <label htmlFor="email">E-mail</label>
            <input type='email' id='email' name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />

            {formik.errors.email && formik.touched.email &&
                <span style={{ color: "red", fontSize: "13px" }}>{formik.errors.email}</span>
            }

            <label htmlFor="urlgit">GitHub URL</label>
            <input type='url' id='urlgit' name="giturl"
                onChange={formik.handleChange}
                value={formik.values.giturl}
                placeholder='http://...'
                onBlur={formik.handleBlur}
            />

            {formik.errors.giturl && formik.touched.giturl &&
                <span style={{ color: "red", fontSize: "13px" }}>{formik.errors.giturl}</span>
            }

            <input type='checkbox' id='cgu' name="cgu"
                onChange={formik.handleChange}
                checked={formik.values.cgu}
                onBlur={formik.handleBlur}
            />
            <label htmlFor="cgu">J'accepte les Conditions Générales d'Utilisation (CGU) </label>

            {formik.errors.cgu && formik.touched.cgu &&
                <span style={{ color: "red", fontSize: "13px" }}>{formik.errors.cgu}</span>
            }

            <button disabled={formik.isSubmitting} type="submit">SUBMIT</button>
            {/* // possible disabled={!formik.isValid} */}
            <br />
        </form>

        <br />
        <Link to={'/'}>GO to HOME</Link>

    </>)
}



export default SignupPage