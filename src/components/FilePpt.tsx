import React, { FC } from 'react';


const OfficeViewer: FC = () => {
    const embedUrl = process.env.PUBLIC_URL + '/WAZUH_presentation.pptx';

    return (
        <div style={{ margin: '0 10px' }}>
            <a href={embedUrl} download="Wazuh.ppt" style={{ color: 'inherit', textDecoration: 'none' }}>
                Thesis Presentation
            </a>
        </div>
    );
};

export default OfficeViewer;
