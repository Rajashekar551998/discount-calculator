import React, { useState } from 'react';

const DiscountCalculator = () => {
    const [originalPrice, setOriginalPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [finalPrice, setFinalPrice] = useState(null);
    const [savedAmount, setSavedAmount] = useState(null);

    const handleOriginalPriceChange = (e) => {
        const value = e.target.value;
        if (value === '' || parseFloat(value) >= 0) {
            setOriginalPrice(value);
        }
    };

    const handleDiscountPercentageChange = (e) => {
        const value = e.target.value;
        if (value === '' || parseFloat(value) >= 0) {
            setDiscountPercentage(value);
        }
    };

    const calculateDiscount = () => {
        if (originalPrice !== '' && discountPercentage >= 0) {
            const discountAmount = (originalPrice * discountPercentage) / 100;
            const priceAfterDiscount = originalPrice - discountAmount;
            setFinalPrice(priceAfterDiscount.toFixed(2));
            setSavedAmount(discountAmount.toFixed(2));
        }
    };

    const clearFields = () => {
        setOriginalPrice('');
        setDiscountPercentage('');
        setFinalPrice(null);
        setSavedAmount(null);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Discount Calculator</h1>
            <div style={{ marginBottom: '10px' }}>
                <span style={{marginRight: '5px'}}>$</span>
                <input
                    type="text"
                    placeholder="Original Price"
                    value={originalPrice}
                    onChange={handleOriginalPriceChange}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
            <span style={{marginRight: '5px'}}>%</span>
                <input
                    type="text"
                    placeholder="Discount Percentage"
                    value={discountPercentage}
                    onChange={handleDiscountPercentageChange}
                />
            </div>
            <div>
                <button className='btn btn-success' onClick={calculateDiscount} style={{ marginRight: '10px' }}>Calculate</button>
                <button className="btn btn-warning" style={{color: 'white'}} onClick={clearFields}>Clear</button>
            </div>
            {finalPrice !== null && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Final Price: ${finalPrice}</h2>
                    <h3>You Saved: ${savedAmount}</h3>
                </div>
            )}
        </div>
    );
};

export default DiscountCalculator;