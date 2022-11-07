import iron from '../images/ironhack-logo-xs.png';
import menu  from '../images/menu-top-xs.png';
import back from '../images/back.png';
import declarative from '../images/icon1.png';
import components from '../images/icon2.png';
import single from '../images/icon3.png';
import jsx from '../images/icon4.png';

import './HeaderPage.css';

function HeaderPage () {
    return (
                
        <div className = "LandingPage">
                         
            <header className = "Topo">
                <section className = "Back">
                    <img src = {back} alt="back"/>
                </section>
                <section className = "Logo-menu">
                    <img src = {iron} alt="back" />
                    <img src = {menu} alt="menu" />
                </section>
            </header>
            
            <body className = "Corpo">
                <h1>Say hello to<br></br>ReactJS</h1>
                <p>You will learn how to use<br></br>the most popular frontend library,<br></br>and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </body>

            <footer className = "Rodape">
                <section className = "Declarative">
                    <img src = {declarative} alt="declarative" />
                    <h2>Declarative</h2>
                    <p>React makes it<br></br>paineless to create<br></br>interactive UIs.</p>
                </section>

                <section className = "Components">
                    <img src = {components} alt="Components" />
                    <h2>Components</h2>
                    <p>Build encapsuled<br></br>components that<br></br>manage their state.</p>
                </section>

                <section className = "Single">
                    <img src = {single} alt="Single-Way" />
                    <h2>Single-Way</h2>
                    <p>A set of immutable<br></br>values are passed to<br></br>the component's.</p>
                </section>

                <section className = "Jsx">
                    <img src = {jsx} alt="Jsx" />
                    <h2>JSX</h2>
                    <p>Statically-typed,<br></br>designed to run on<br></br>modern browsers.</p>
                </section>



            </footer>


        </div>
    )
}

export default HeaderPage;
