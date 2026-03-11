import { useState } from 'react';
import { Screen, Category, Listing } from './types';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { BrowseScreen } from './components/BrowseScreen';
import { ListingDetailScreen } from './components/ListingDetailScreen';
import { PostListingScreen } from './components/PostListingScreen';
import { RequestsScreen } from './components/RequestsScreen';
import { PostRequestScreen } from './components/PostRequestScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { BottomNav } from './components/BottomNav';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('home');
  };

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
    setSearchQuery('');
  };

  const handleCategorySelect = (category: Category | 'Requests') => {
    if (category === 'Requests') {
      setCurrentScreen('requests');
    } else {
      setSelectedCategory(category);
      setCurrentScreen('browse');
    }
  };

  const handleListingSelect = (listing: Listing) => {
    setSelectedListing(listing);
    setCurrentScreen('detail');
  };

  const handleBack = () => {
    if (currentScreen === 'detail') {
      setCurrentScreen('browse');
    } else if (currentScreen === 'browse' || currentScreen === 'post-request') {
      setCurrentScreen('home');
    }
  };

  const handlePost = () => {
    setCurrentScreen('home');
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="max-w-lg mx-auto bg-gray-50 min-h-screen relative">
      {currentScreen === 'home' && (
        <HomeScreen
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onCategorySelect={handleCategorySelect}
          onListingSelect={handleListingSelect}
          onNavigate={handleNavigate}
        />
      )}

      {currentScreen === 'browse' && (
        <BrowseScreen
          category={selectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onBack={handleBack}
          onListingSelect={handleListingSelect}
        />
      )}

      {currentScreen === 'detail' && selectedListing && (
        <ListingDetailScreen
          listing={selectedListing}
          onBack={handleBack}
        />
      )}

      {currentScreen === 'post' && (
        <PostListingScreen onPost={handlePost} />
      )}

      {currentScreen === 'requests' && (
        <RequestsScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === 'post-request' && (
        <PostRequestScreen
          onBack={() => setCurrentScreen('requests')}
          onPost={() => setCurrentScreen('requests')}
        />
      )}

      {currentScreen === 'profile' && (
        <ProfileScreen onLogout={handleLogout} />
      )}

      <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
    </div>
  );
}
