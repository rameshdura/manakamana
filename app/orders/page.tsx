"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Package, Calendar, CheckCircle2, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

// Types
interface OrderItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered";
  total: string;
  items: OrderItem[];
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Read from local storage
    try {
      const storedOrders = localStorage.getItem("manakamana_orders");
      if (storedOrders) {
        setOrders(JSON.parse(storedOrders));
      }
      
      // For demonstration purposes, if you want to preview a fake order:
      // if (!storedOrders) {
      //   const dummyOrder: Order[] = [{
      //     id: "MNK-8924-A92",
      //     date: "June 24, 2026",
      //     status: "Processing",
      //     total: "¥2,700",
      //     items: [
      //       { id: "1", name: "Frozen Chicken Momo", price: "¥1,200", quantity: 1, image: "/momo.jpg" },
      //       { id: "2", name: "Premium Dal Bhat Thali Set", price: "¥1,500", quantity: 1, image: "/thali.jpg" }
      //     ]
      //   }];
      //   setOrders(dummyOrder);
      // }
      
    } catch (error) {
      console.error("Failed to load orders from local storage:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[hsl(224_40%_6%)] font-sans selection:bg-primary/20 dark:selection:bg-[hsl(224_80%_65%)]/20 overflow-x-hidden flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[120rem] 2xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-32 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight mb-4">
              Your Orders
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-lg">
              Track, manage, and review your recent purchases.
            </p>
          </div>

          {loading ? (
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="w-full h-48 bg-white dark:bg-[hsl(224_40%_9%)] animate-pulse rounded-[2rem] border border-stone-200 dark:border-[hsl(224_30%_18%)]"></div>
              ))}
            </div>
          ) : orders.length === 0 ? (
            // Empty State
            <div className="bg-white dark:bg-[hsl(224_40%_9%)] border border-stone-200 dark:border-[hsl(224_30%_18%)] rounded-[2rem] p-12 text-center shadow-sm flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="w-24 h-24 bg-stone-100 dark:bg-[hsl(224_30%_15%)] rounded-full flex items-center justify-center mb-6">
                <Package className="w-10 h-10 text-stone-400 dark:text-stone-500" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-3">No orders yet</h3>
              <p className="text-stone-500 dark:text-stone-400 mb-8 max-w-md mx-auto text-lg">
                Looks like you haven't made your first order with us yet. Discover authentic Nepali flavors in our shop!
              </p>
              <Link 
                href="/shop" 
                className="bg-primary hover:bg-primary/90 dark:hover:bg-[hsl(224_80%_65%)]/90 text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-5 h-5" />
                Start Shopping
              </Link>
            </div>
          ) : (
            // Orders List
            <div className="space-y-6">
              {orders.map((order, i) => (
                <div 
                  key={order.id} 
                  className="bg-white dark:bg-[hsl(224_40%_9%)] border border-stone-200 dark:border-[hsl(224_30%_18%)] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 justify-between border-b border-stone-100 dark:border-[hsl(224_30%_18%)] bg-stone-50/50 dark:bg-[hsl(224_30%_12%)]/50">
                    <div className="grid grid-cols-2 sm:flex sm:gap-12 gap-y-4">
                      <div>
                        <p className="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-1">Order Placed</p>
                        <p className="font-semibold text-stone-900 dark:text-stone-200 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-stone-400" />
                          {order.date}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-1">Total</p>
                        <p className="font-semibold text-stone-900 dark:text-stone-200">{order.total}</p>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <p className="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-1">Order #</p>
                        <p className="font-mono text-sm text-stone-600 dark:text-stone-400">{order.id}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start sm:items-end justify-center">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                      }`}>
                        {order.status === 'Delivered' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                        {order.status}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <div className="space-y-6">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 sm:gap-6">
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-stone-100 dark:bg-[hsl(224_30%_15%)] shrink-0 border border-stone-200/50 dark:border-[hsl(224_30%_18%)]">
                            <Image 
                              src={item.image} 
                              alt={item.name} 
                              fill 
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 truncate mb-1">
                              {item.name}
                            </h4>
                            <p className="text-stone-500 dark:text-stone-400 text-sm mb-2">Qty: {item.quantity}</p>
                            <div className="flex items-center gap-4">
                              <span className="font-semibold text-primary">{item.price}</span>
                              <Link href={`/shop?product=${item.id}`} className="text-sm font-medium text-stone-400 dark:text-stone-500 hover:text-primary dark:hover:text-primary transition-colors underline underline-offset-4 decoration-stone-200 dark:decoration-stone-700">
                                View Product
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
