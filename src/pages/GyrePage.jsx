import React from 'react';
import ShopPage from './ShopPage';
export default function GyrePage({onSelectProduct,onNavigate}) {
 return <ShopPage collection onNavigateToProduct={onSelectProduct} onNavigate={onNavigate}/>;
}
