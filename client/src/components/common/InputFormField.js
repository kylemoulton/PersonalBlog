import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label style={{fontSize: "14px"}}>{label}</label>
            <input {...input} style={{marginBottom: '5px'}} />
            <div className="red-text" style={{marginBottom: '10px' }}>
                {touched && error}
            </div>
        </div>
    );
}