import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {dummyData, SIZES} from '../../constants';
import {
  HorizontalFoodCard,
  MenuType,
  SearchBox,
  RecommendSection,
  PopularSection,
  FoodCategoriesSection,
  DeliveryToSection,
  FilterModal,
} from './components';

const Home = ({navigation}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [popular, setPolular] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    let selectedPopular = dummyData.menu.find(a => a.name == 'Popular');
    let selectedRecommend = dummyData.menu.find(a => a.name == 'Recommended');
    let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId);
    setPolular(
      selectedPopular?.list.filter(a => a.categories.includes(categoryId)),
    );
    setRecommends(
      selectedRecommend?.list.filter(a => a.categories.includes(categoryId)),
    );
    setMenuList(
      selectedMenu?.list.filter(a => a.categories.includes(menuTypeId)),
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <SearchBox />

      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <DeliveryToSection />
            <FoodCategoriesSection
              selectedCategoryId={selectedCategoryId}
              setSelectedCategoryId={setSelectedCategoryId}
              selectedMenuType={selectedMenuType}
              handleChangeCategory={handleChangeCategory}
            />
            <PopularSection popular={popular} navigation={navigation} />
            <RecommendSection recommends={recommends} navigation={navigation} />
            <MenuType
              selectedCategoryId={selectedCategoryId}
              selectedMenuType={selectedMenuType}
              setSelectedMenuType={setSelectedMenuType}
              handleChangeCategory={handleChangeCategory}
            />
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => navigation.navigate('FoodDetail', {foodItem: item})}
            />
          );
        }}
        ListFooterComponent={<View style={{height: 200}} />}
      />
    </View>
  );
};

export default Home;
