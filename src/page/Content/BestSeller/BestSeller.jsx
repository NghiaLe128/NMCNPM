import React from 'react'
import CardField from '../CardField/CardField'

function BestSeller() {
  return (
    <div style = {{
        width: '100%',
        paddingBottom: '40%',
        marginTop: '30px',
        marginBottom: '30px',
        background: '#ccc',
        position: 'relative'
    }}>
        <div style={{ 
        width: '100%', 
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)'
        }}>
            <CardField/>
        </div>
    </div>
  )
}

export default BestSeller