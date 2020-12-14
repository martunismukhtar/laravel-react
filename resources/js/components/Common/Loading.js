import React  from 'react';

export default function Loading(){
    return (
        <div>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <span className="loading-text">Loading...</span>
            
        </div>
    )
}