import React, { useState, useEffect } from "react";
import { Button, Checkbox, Drawer, Slider, Space } from "antd";
import './productFilter.css'

export default function ProductFilter(props) {
    const {
        open, onClose, priceRange, handlePriceChange, formatPrice, brands, selectedBrands, handleBrandChange,
        categories,selectedCategories,handleCategoryChange,handleResetFilters,handleApplyFilters,
    } = props;

    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const filterContent = (
        <div className="content-filter">
            <div className="filter filter-price">
                <h3>Giá</h3>
                <Slider range min={100000} max={60000000} value={priceRange} onChange={handlePriceChange} />
                <p>Giá từ: <span className="change-price">{formatPrice(priceRange[0])}</span> - <span className="change-price">{formatPrice(priceRange[1])}</span></p>
            </div>
            <hr />
            <div className="filter filter-brand">
                <h3>Thương hiệu</h3>
                {brands.map((brand) => (
                    <div key={brand.id} className="inline-checkbox">
                        <Checkbox checked={selectedBrands.includes(brand.id)} onChange={() => handleBrandChange(brand.id)}>
                            {brand.name}
                        </Checkbox>
                        <span className="count-product">{`(${brand.count})`}</span>
                    </div>
                ))}
            </div>
            <hr />
            <div className="filter filter-category">
                <h3>Danh mục</h3>
                {categories.map((category) => (
                    <div key={category.id} className="inline-checkbox">
                        <Checkbox checked={selectedCategories.includes(category.id)} onChange={() => handleCategoryChange(category.id)}>
                            {category.name}
                        </Checkbox>
                        <span className="count-product">{`(${category.count})`}</span>
                    </div>
                ))}
            </div>
            <hr />
            <div className="filter filter-control">
                <Button className="btn-apply-filter" onClick={() => {
                        handleApplyFilters();
                        onClose();
                    }}>
                        Áp dụng
                </Button>
                <Button className="btn-reset-filter" onClick={handleResetFilters}>Bỏ chọn</Button>
            </div>
        </div>
    );

    return isMobile ? (
        <Drawer title="Lọc sản phẩm" placement="left" closable={false} onClose={onClose} open={open} extra={
            <Space>
                <Button className="btn-calcel" onClick={onClose}>X</Button>
            </Space>
        }>
            {filterContent}
        </Drawer>
    ) : (
        filterContent
    );
}