import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <textarea {...input} style={{marginBottom: '5px', height: 'auto'}} rows="15" />
            <div className="red-text" style={{marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
}