import React from 'react'
import {StyledNav} from "./NavStyles";
const Nav = ({bar}) => {
    let [actualSection, setActualSection] = React.useState(0);
    let $links = document.getElementsByClassName("navLink");
    // console.log($links);
    let barHeight = bar;
        
    //     let regex = /^\d+/g;
    //     let barPercent = barHeight.match(regex)[0];
/* 
0 - 26
26 - 59
59 - 95
95 - 100
*/ 
// var c;
// setActualSection(1);
// console.log(actualSection);
    // if(barHeight < 33 && barHeight > 0){
    //     setActualSection(0);
    // }else if(barHeight > 33 && barHeight < 66){
    //     setActualSection(1);
    // }else if(barHeight > 66 && barHeight < 99){
    //     setActualSection(2);
    // }else if(barHeight > 99){
    //     setActualSection(3);
    // }
// console.log(c);
    React.useEffect (() => { 
        if(barHeight < 26 && barHeight > 0){
            setActualSection(0);
        }else if(barHeight > 26 && barHeight < 59){
            setActualSection(1);
        }else if(barHeight > 59 && barHeight < 95){
            setActualSection(2);
        }else if(barHeight > 95){
            setActualSection(3);
        }
        // console.log(actualSection);
    },[barHeight]);

    // switch (barHeight){
    //     case (barHeight < 33 && barHeight > 0):
    //         setActualSection(0);
    //         break;
    //     case (barHeight > 33 && barHeight < 66):
    //         setActualSection(1);
    //         break;
    //     case (barHeight > 66 && barHeight < 99):
    //         setActualSection(2);
    //         break;
    //     case (barHeight > 99):
    //         setActualSection(3);
    //         break;
    //     default:
    //         console.log("here");
    // }

    // if(barPercent < 33){
    //     setActualSection(0);
    // }else if(barPercent > 33){
    //     setActualSection(1);
    // }else if(barPercent < 66){
    //     setActualSection(2);
    // }else if(barPercent > 66){
    //     setActualSection(3);
    // }

    // if (c){
    //     for (let i = 0; i <= $links.length; i++){
    //         console.log($links[i]);
    //         console.log($links[c]);
    //         $links[i] === $links[c]
    //         ?$links[c].firstElementChild.style.color= "green"
    //         :$links[c].firstElementChild.style.color = "white";
    //     }
    // }
    React.useEffect(()=>{
        console.log(actualSection);
        // console.log($links);
        // $links.map()
        // $links.filter()
        // se i = $links.actualSection.firstElementChild
        console.log("-----------------------------------")
        for (let i = 0; i < $links.length; i++){
            // console.log($links[i]);
            // console.log($links[actualSection]);
            console.log($links[i] === $links[actualSection]);
            // if ($links[i] === $links[actualSection]){
            //     $links[i].firstElementChild.style.color= "green"
            // }else{
            //     $links[i].firstElementChild.style.color = "white";
            //  }
            $links[i] === $links[actualSection]
            // ?$links[i].firstElementChild.style.color = "#13AA52"
            ?$links[i].firstElementChild.style.color = "#F3F3F4"
            :$links[i].firstElementChild.style.color = "#A6ACB1";
        }

        // $links[actualSection].firstElementChild.style.color = "green";
    }, [actualSection]);


    // console.log(actualSection);
    // console.log($links[actualSection].firstElementChild);

    // $links.map((element) => {
    //     if( element === $links[actualSection].firstElementChild){
    //         return $links[actualSection].firstElementChild.style.color = "green";
    //    }else{
    //        return element.firstElementChild.style.color = "white";
    //    }
    // })
    return (
        <StyledNav >
            <div id="progressBar" className="progress-bar"></div>
            {/* <p style={{color: "white"}}>{bar}</p> */}
            <div id="navLinks">
                {/* {{bar}} */}
                {/* {barPercent < 33
                ?<a href="#Home"><p style={{color: "green"}}id="activeSection">Home</p></a>
                :<a href="#Home"><p id="activeSection">Home</p></a>
                } */}
                
                <a className="navLink" href="#Home" ><p id="activeSection">Home</p></a>
                <a className="navLink" href="#Skills"><p>Skills</p></a>
                <a className="navLink" href="#Projects"><p>Projects</p></a>
                <a className="navLink" href="#Contact"><p>Contact</p></a>
               
            </div>

        </StyledNav>
    )
}

export default Nav
