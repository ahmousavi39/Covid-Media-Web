import React from 'react';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';
import { Link } from "react-router-dom";

export function Apps() {
    return (
        <div>
            <p style={{textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>You can use our mobile app, for easier access!</p>
            <div style={{ marginRight: 'auto', marginLeft: 'auto', textAlign: 'center', marginTop: '20px' }}>
                <button type="button" class="btn btn-primary"><Link to="/App/Covid Media.apk" style={{ color: 'white' }} target="_blank" download><AiFillAndroid size={20} style={{ marginBottom: '2px' }} /> Android</Link></button>
                <button type="button" class="btn btn-outline-primary"><Link to="/App/Covid Media.tar.gz" style={{ color: 'black' }} target="_blank" download><AiFillApple size={20} style={{ color: 'black', marginBottom: '4px' }} /> IOS</Link></button>
            </div>
        </div>
    )
}