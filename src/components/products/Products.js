import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import { Col, Container, Row } from "reactstrap";
import Product from "../product/Product";
import { addItem } from '../../redux/cartSlice';
import { Button, Dropdown, Input, Pagination } from 'antd';
import ProductFilter from "../productFilter/ProductFilter";
import './products.css'
const { Search } = Input;

export default function Products() {
  const dispatch = useDispatch();
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const { products } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12
  const [open, setOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([100000, 60000000]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const [sortOrderLabel, setSortOrderLabel] = useState('Không');
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };
  const handlePriceChange = (value) => {
    setPriceRange(value);
  };
  const handleBrandChange = (id) => {
    if (selectedBrands.includes(id)) {
      setSelectedBrands(selectedBrands.filter((brandId) => brandId !== id));
    } else {
      setSelectedBrands([...selectedBrands, id]);
    }
  };
  const handleCategoryChange = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((categoryId) => categoryId !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };
  const getSelectedBrands = () => {
    return brands.filter(brand => selectedBrands.includes(brand.id)).map(brand => brand.name);
  };
  const getSelectedCategories = () => {
    return categories.filter(category => selectedCategories.includes(category.id)).map(category => category.name);
  };
  const handleApplyFilters = () => {
    const brandNames = getSelectedBrands();
    const categoryNames = getSelectedCategories();
    let filtered = products.filter((product) => {
      const priceInRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      const brandMatch = brandNames.length === 0 || brandNames.includes(product.brand);
      const categoryMatch = categoryNames.length === 0 || categoryNames.includes(product.category);
      const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return priceInRange && brandMatch && categoryMatch && searchMatch;
    });
    if (sortOrder === 'price-asc') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'name-asc') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'name-desc') {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    }
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };
  const onSearch = (value) => {
    setSearchTerm(value);
  };
  const handleResetFilters = () => {
    setPriceRange([10000, 100000000]);
    setSelectedBrands([]);
    setSearchTerm('');
    setSelectedCategories([]);
    setFilteredProducts(products);
    setCurrentPage(1);
  };
  useEffect(() => {
    handleApplyFilters();
  }, [searchTerm, sortOrder]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (products.length === 0 || shouldRefetch) {
      dispatch(fetchProducts()).then(() => {
        setLoading(false);
        setShouldRefetch(false);
      });
    }
  }, [dispatch, products, shouldRefetch]);
  
  useEffect(() => {
    if (products.length > 0 && !loading) {
      handleApplyFilters();
    }
  }, [products]);

  useEffect(() => {
    const uniqueBrands = [...new Set(products.map((product) => product.brand))];
    const brandCounts = uniqueBrands.map((brand) => {
      const count = products.filter((product) => product.brand === brand).length;
      return { id: uniqueBrands.indexOf(brand), name: brand, count };
    });
    setBrands(brandCounts);

    const uniqueCategories = [...new Set(products.map((product) => product.category))];
    const categoryCounts = uniqueCategories.map((category) => {
      const count = products.filter((product) => product.category === category).length;
      return { id: uniqueCategories.indexOf(category), name: category, count };
    });
    setCategories(categoryCounts);
  }, [products]);
  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const paginated = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    setPaginatedProducts(paginated);
  }, [filteredProducts, currentPage, pageSize]);

  const items = [
    {
      label: 'Tên từ A đến Z',
      value: 'name-asc',
      onClick: () => {
        setSortOrder('name-asc');
        setSortOrderLabel('Tên từ A đến Z');
      },
    },
    {
      label: 'Tên từ Z đến A',
      value: 'name-desc',
      onClick: () => {
        setSortOrder('name-desc');
        setSortOrderLabel('Tên từ Z đến A');
      },
    },
    {
      label: 'Giá từ thấp đến cao',
      value: 'price-asc',
      onClick: () => {
        setSortOrder('price-asc');
        setSortOrderLabel('Giá từ thấp đến cao');
      },
    },
    {
      label: 'Giá từ cao đến thấp',
      value: 'price-desc',
      onClick: () => {
        setSortOrder('price-desc');
        setSortOrderLabel('Giá từ cao đến thấp');
      },
    },
  ];

  return (
    <div>
      <Container>
        <div className="btn-search">
          <Search placeholder="Tìm kiếm sản phẩm" allowClear enterButton="Tìm kiếm" size="large" onSearch={onSearch}/>  
        </div>
        <div className="display-filter">
          <Button className="btn-drawer" onClick={showDrawer}>Bộ lọc</Button>
          <Dropdown menu={{items}} trigger={['click']}>
            <span className="btn-drop">
              <span>Sắp xếp: </span>
              <Button>{sortOrderLabel}</Button>
            </span>
          </Dropdown>
        <div>  
        </div>
        </div>
        <Row>
          <Col lg={3} md={12} sm={12} xs={12} className="filter-products">
            <div>
              <ProductFilter
                open={open}
                onClose={onClose}
                priceRange={priceRange}
                handlePriceChange={handlePriceChange}
                formatPrice={formatPrice}
                brands={brands}
                selectedBrands={selectedBrands}
                handleBrandChange={handleBrandChange}
                categories={categories}
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}
                handleResetFilters={handleResetFilters}
                handleApplyFilters={handleApplyFilters}
              />
            </div>
          </Col>
          <Col lg={9} md={12} sm={12} xs={12} className="show-products">
            <Row className="row-show">
              {
                paginatedProducts.map((product, index) => (
                  <Col key={index} xl={3} lg={4} sm={6} xs={6} className='mb-3'>
                    <Product  product={product} addItem={handleAddItem} />
                  </Col>
                ))
              }
            </Row>
            <Pagination align="center" total={filteredProducts.length} showQuickJumper current={currentPage} pageSize={pageSize} onChange={handlePageChange}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}