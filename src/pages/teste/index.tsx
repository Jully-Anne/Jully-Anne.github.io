import React from 'react'
import JsonData from '../../json/NormsTable/data.json'


function JsonDataDisplay() {
    const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr>

                    <td style={{ color: '#C9D1D9', borderLeft: 'none', borderTop: '1px solid #C9D1D9', paddingInline: '1.5rem', fontSize: '14px', padding: '1rem' }}>{info.word}</td>
                    <td style={{ color: '#C9D1D9', border: 'none', borderTop: '1px solid #C9D1D9', paddingInline: '1.5rem', fontSize: '14px', padding: '1rem' }}>{info.description}</td>

                </tr>

            )
        }
    )

    return (
        <div style={{
            marginTop: '2rem',
            backgroundColor: '#161B22',
            borderRadius: '0.7rem',
            border: 'solid 2px #C9D1D9',
        }}>
            <table aria-label="sticky table" style={{ borderCollapse: 'collapse', }}>
                <thead style={{ color: '#58A6FF', height: '3rem', fontSize: '18px' }}>
                    <tr >
                        <th style={{ maxWidth: '2rem' }}>Palavra</th>

                        <th style={{ maxWidth: '4rem' }}>Descrição</th>
                    </tr>
                </thead>
                <tbody >


                    {DisplayData}


                </tbody>
            </table>

        </div>
    )
}

export default JsonDataDisplay;