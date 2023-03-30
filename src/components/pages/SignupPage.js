import { Link } from "react-router-dom";
import "../../assets/css/loginPage.css"

// doc https://formik.org/docs/overview
// yarn add formik or  npm install formik --save
import { useFormik } from 'formik'

// doc https://github.com/jquense/yup
// yarn add yup  
import * as Yup from 'yup';
// yarn add @hookform/resolvers
// import { yupResolver } from "@hookform/resolvers/yup";

const SignupPage = () => {


    const initialValues = { // formik est lié à l'attribut name du formulaire
        name: '',
        email: '',
        giturl: '',
        cgu: false
    };

    const handleSubmitForm = (formValues) => { // fonction responsable de la soumission du formulaire, prend en paramètre les valeurs du formulaire
        console.log('handleSubmitForm formValues', formValues);
    };


    const validate = (formValues) => { // fonction qui prend en paramètre les valeurs du formulaire

        const errors = {}

        if (formValues.name === "") {
            errors.name = 'le nom est obligatoire'
        }
        if (formValues.email === "") {
            errors.email = 'l\'email est obligatoire'
        }
        if (formValues.giturl === "") {
            errors.giturl = `l'adresse de votre GitHub est obligatoire`
        }
        if (!formValues.cgu) {
            errors.cgu = 'veuillez accepter les conditions générales d\'utilisation'
        }
        return errors;
    }

    // console.log("formik.errors ", formik.errors);

    const formik = useFormik({
        initialValues,  // useFormik({}) // prend un objet en paramètre, que nous détaillons plus haut pr + de lisibilité
        onSubmit: handleSubmitForm, // la clé onSubmit attend une fonction responsable de la soumission du formulaire, que nous écrirons plus haut
        //! formik execute la fonction validate avant le onSubmit, donc on fait la gestion des erreurs dans validate
        validate
    })

    console.log("formValues ", formik.values);
    console.log("formik.errors ", formik.errors);

    // créer un schéma (=objet) qui va contenir la validation que l'on souhaite obtenir à chaque champ

    // const formValidate = Yup.object({
    //     name: Yup.string()
    //         .min(3, 'must be 3+ characters')
    //         .max(20, 'must be 20 characters or less')
    //         .required('required)'),
    //     email: Yup.string()
    //         .email('Email is invalid')
    //         .required('required)'),
    //     // giturl: Yup.string()
    //     //     .url('URL is invalid')
    //     //     .required('required)'),
    // })

    // const logIn = formValidate.validate(fetchUser());



    // on peut déstructurer formik.values
    // const { name, email, giturl, cgu } = formik.values


    return (<>

        <form onSubmit={formik.handleSubmit} className="form">
            <h2>SignupPage</h2>
            <label htmlFor="name">Name</label>
            <input type='text' id='name' name="name" onChange={formik.handleChange} value={formik.values.name} />
            {/*  formik.values attends l'attribut name="" */}
            <label htmlFor="email">E-mail</label>
            <input type='email' id='email' name="email" onChange={formik.handleChange} value={formik.values.email} />

            <label htmlFor="urlgit">GitHub URL</label>
            <input type='url' id='urlgit' name="giturl" onChange={formik.handleChange} value={formik.values.giturl} placeholder='http://...' />

            <input type='checkbox' id='cgu' name="cgu" onChange={formik.handleChange} checked={formik.values.cgu} />
            <label htmlFor="cgu">J'accepte les Conditions Générales d'Utilisation (CGU) </label>

            <button type="submit">SUBMIT</button>
            <br />
        </form>

        <br />
        <Link to={'/'}>GO to HOME</Link>
        
    </>)
}



export default SignupPage