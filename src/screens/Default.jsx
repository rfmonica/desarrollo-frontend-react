import Logo from './_components/Logo'
import Description from './_components/Description';
import OpenLink from '../components/OpenLink';
import LessonInfo from './_components/LessonInfo';

const Default = () => {
return(
    <>
     <header className="App-header">
        <Logo />
        <Description />

        <OpenLink 
        title="Learn React" 
        url="https://react.dev/"/>
        
        <OpenLink 
        title="Mi proyecto react (GitHub)" 
        url="https://github.com/rfmonica/desarrollo-frontend-react/"/>
        <LessonInfo Unitnumber="1" title=" Introduccion a react y estructura de proyecto" />
        <LessonInfo Unitnumber="2" title="Conext API  gestion del estado global en aplicaciones react" />
       
        </header>
    </>
);

};

export default Default;