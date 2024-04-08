export default function Section({title, id, children}){
    return(
        //instead of adding section tag in app.js with hard coded value, we can add customized secion from here so that
        //whatever values comes for section that will display
        <section id={id}> 
            <h2>{title}</h2>
            {children}
        </section>

    )
}