import React, { useState, useEffect, useRef } from 'react';
import { useGetCurrentUser } from './hooks/GetCurrentUser';
import Preloader from './Preloader';

const TWO_HOURS = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

function PLoader({ children }: { children: JSX.Element }) {
    const [showModal, setShowModal] = useState(false);
    const [user, loading, error] = useGetCurrentUser();
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const lastShown = localStorage.getItem('securityNoticeLastShown');
        const now = new Date().getTime();
        
        // // Show modal if it's the first time or if 12 hours have passed
        if (!lastShown || (now - parseInt(lastShown, 10)) > TWO_HOURS) {
            setShowModal(true);
            localStorage.setItem('securityNoticeLastShown', now.toString());
        }
    }, []);

    const handleClose = () => {
        setShowModal(false);
    };

    if (loading) return <Preloader />

    
    return (
        <>
            {children}
            <div className={`modal fade ${showModal ? 'show d-block' : ''}`} style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 pb-0">
                            <h5 className="modal-title w-100 text-black text-xl font-bold text-center">Secure Trading Notice</h5>
                            <button type="button" className="btn-close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body text-center py-4">
                            <div className="mb-4">
                                <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                                <p className="mb-2 text-gray-600">Notice: All trades placed and investments are 100% secured.</p>
                                <p className="mb-4 text-gray-600">You can be fully confident as there will always be success in trade.</p>
                                <button 
                                    type="button" 
                                    className="btn btn-warning text-white px-4"
                                    onClick={handleClose}
                                >
                                    I Understand
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PLoader
