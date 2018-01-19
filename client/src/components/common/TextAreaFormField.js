import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label style={{fontSize: "14px"}}>{label}</label>
            <textarea {...input} style={{margin: '10px 0px 10px 0px', height: 'auto'}} rows="15" />
            <div className="red-text" style={{marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
}