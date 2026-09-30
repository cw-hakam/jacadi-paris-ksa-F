import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Mail, Phone, MapPin, Lock, Camera, Package, Heart, CreditCard } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Profile updated successfully!', {
      description: 'Your account information has been saved.',
    });
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('Passwords do not match', {
        description: 'Please make sure your passwords match.',
      });
      return;
    }

    if (passwordData.newPassword.length < 8) {
      toast.error('Password too short', {
        description: 'Password must be at least 8 characters long.',
      });
      return;
    }

    toast.success('Password changed successfully!', {
      description: 'Your password has been updated.',
    });
    
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  const handleAvatarUpload = () => {
    toast.success('Avatar uploaded!', {
      description: 'Your profile picture has been updated.',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Profile' }]} />
        </div>

        <section className="container py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                My Profile
              </h1>
              <p className="text-muted-foreground">
                Manage your account information and preferences
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-card rounded shadow-soft p-6 sticky top-24">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 rounded bg-primary/10 flex items-center justify-center">
                        <User className="h-12 w-12 text-primary" />
                      </div>
                      <button
                        onClick={handleAvatarUpload}
                        className="absolute bottom-0 right-0 w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                        aria-label="Upload avatar"
                      >
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                    <h3 className="font-display font-bold text-lg">{formData.firstName} {formData.lastName}</h3>
                    <p className="text-sm text-muted-foreground">{formData.email}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <Button
                      variant={activeTab === 'account' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveTab('account')}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Account Details
                    </Button>
                    <Button
                      variant={activeTab === 'password' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveTab('password')}
                    >
                      <Lock className="h-4 w-4 mr-2" />
                      Change Password
                    </Button>
                    <Button
                      variant={activeTab === 'orders' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveTab('orders')}
                    >
                      <Package className="h-4 w-4 mr-2" />
                      Order History
                    </Button>
                    <Button
                      variant={activeTab === 'wishlist' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveTab('wishlist')}
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </Button>
                    <Button
                      variant={activeTab === 'payment' ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveTab('payment')}
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Payment Methods
                    </Button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-3">
                {/* Account Details Tab */}
                {activeTab === 'account' && (
                  <div className="bg-card rounded shadow-soft p-6">
                    <h2 className="font-display text-2xl font-bold mb-6">Account Information</h2>
                    
                    <form onSubmit={handleSaveProfile} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            className="pl-10"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            className="pl-10"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="address"
                            className="pl-10"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button type="submit">Save Changes</Button>
                        <Button type="button" variant="outline" onClick={() => {
                          setFormData({
                            firstName: 'John',
                            lastName: 'Doe',
                            email: 'john.doe@example.com',
                            phone: '+1 (555) 123-4567',
                            address: '123 Main St, City, State 12345',
                          });
                          toast.info('Changes discarded');
                        }}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Change Password Tab */}
                {activeTab === 'password' && (
                  <div className="bg-card rounded shadow-soft p-6">
                    <h2 className="font-display text-2xl font-bold mb-6">Change Password</h2>
                    
                    <form onSubmit={handleChangePassword} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="currentPassword"
                            type="password"
                            className="pl-10"
                            value={passwordData.currentPassword}
                            onChange={handlePasswordChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="newPassword"
                            type="password"
                            className="pl-10"
                            value={passwordData.newPassword}
                            onChange={handlePasswordChange}
                            required
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">Must be at least 8 characters long</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="confirmPassword"
                            type="password"
                            className="pl-10"
                            value={passwordData.confirmPassword}
                            onChange={handlePasswordChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button type="submit">Update Password</Button>
                        <Button type="button" variant="outline" onClick={() => {
                          setPasswordData({
                            currentPassword: '',
                            newPassword: '',
                            confirmPassword: '',
                          });
                        }}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Order History Tab */}
                {activeTab === 'orders' && (
                  <div className="bg-card rounded shadow-soft p-6">
                    <h2 className="font-display text-2xl font-bold mb-6">Order History</h2>
                    <div className="space-y-4">
                      {[
                        { id: '12345', date: 'Jan 15, 2024', total: 89.99, status: 'Delivered', statusColor: 'text-green-600' },
                        { id: '12344', date: 'Jan 10, 2024', total: 124.50, status: 'In Transit', statusColor: 'text-blue-600' },
                        { id: '12343', date: 'Dec 28, 2023', total: 56.00, status: 'Delivered', statusColor: 'text-green-600' },
                      ].map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 bg-muted/30 rounded hover:bg-muted/50 transition-colors">
                          <div>
                            <p className="font-semibold">Order #{order.id}</p>
                            <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">SAR {order.total}</p>
                            <p className={cn("text-sm font-medium", order.statusColor)}>{order.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Wishlist Tab */}
                {activeTab === 'wishlist' && (
                  <div className="bg-card rounded shadow-soft p-6">
                    <h2 className="font-display text-2xl font-bold mb-6">My Wishlist</h2>
                    <p className="text-muted-foreground">Your wishlist is empty. Start adding items you love!</p>
                  </div>
                )}

                {/* Payment Methods Tab */}
                {activeTab === 'payment' && (
                  <div className="bg-card rounded shadow-soft p-6">
                    <h2 className="font-display text-2xl font-bold mb-6">Payment Methods</h2>
                    <p className="text-muted-foreground mb-4">Manage your saved payment methods</p>
                    <Button onClick={() => toast.success('Payment method added!')}>
                      <CreditCard className="h-4 w-4 mr-2" />
                      Add Payment Method
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Profile;
