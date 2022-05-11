import React from 'react'


function PeoplesNames(props) {

    const displayPeople = (props) => {
        const { results } = props;

        if (results.length > 0) {
            return (
                results.map((results, index) => {
                //    console.log(results.films);
                    return (
                        <div className='results' key={results.name}>
                            
                            <h2 className="results_name">{results.name}</h2>
                            <h3 className="results_height">{results.height}</h3>
                            <h3 className="results_mass">{results.mass}</h3>
                            <h3 className="results_films">{results.films}</h3>
                        </div>
                    )
                })
            )
        }
    }

    return (
        <>
            {displayPeople(props)}
        </>

    )
}

PeoplesNames.propTypes = {}

export default PeoplesNames
