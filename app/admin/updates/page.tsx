'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, Calendar, Image as ImageIcon, ArrowLeft, Save, Globe, FileEdit, X, Upload, Tag } from 'lucide-react';

type BlogPost = {
  id: string;
  title: string;
  date: string;
  category: string;
  status: 'Published' | 'Draft';
  excerpt: string;
  coverImage: string | null;
  additionalImages: (string | null)[];
  content: string;
};

const BLOG_CATEGORIES = [
  'General News',
  'Event',
  'Special Offer',
  'Press Release',
  'New Menu Item',
  'Behind the Scenes',
  'FAQ'
];

// Dummy data
const initialPosts: BlogPost[] = [
  {
    id: '1',
    title: 'New Summer Menu Launch!',
    date: '2026-06-15',
    category: 'New Menu Item',
    status: 'Published',
    excerpt: 'We are thrilled to announce our new summer menu featuring seasonal ingredients...',
    coverImage: '/api/placeholder/400/200',
    additionalImages: ['/api/placeholder/200/200', null, null, null, null],
    content: 'We are thrilled to announce our new summer menu featuring seasonal ingredients sourced from local farmers. Expect fresh salads, light curries, and refreshing summer beverages.'
  },
  {
    id: '2',
    title: 'Closed for Private Event this Friday',
    date: '2026-06-20',
    category: 'Event',
    status: 'Draft',
    excerpt: 'Please note that the restaurant will be closed for a private corporate event...',
    coverImage: null,
    additionalImages: [null, null, null, null, null],
    content: 'Please note that the restaurant will be closed for a private corporate event this Friday evening. We apologize for any inconvenience and look forward to serving you on Saturday.'
  }
];

export default function UpdatesManager() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [view, setView] = useState<'list' | 'edit'>('list');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const handleAddNew = () => {
    setEditingPost({
      id: Date.now().toString(),
      title: '',
      date: new Date().toISOString().split('T')[0],
      category: 'General News',
      status: 'Draft',
      excerpt: '',
      coverImage: null,
      additionalImages: [null, null, null, null, null],
      content: ''
    });
    setView('edit');
  };

  const handleEdit = (post: BlogPost) => {
    // Ensure older posts without the array get a clean 5-item array and default category
    const additionalImages = post.additionalImages || [null, null, null, null, null];
    const category = post.category || 'General News';
    setEditingPost({ ...post, additionalImages, category });
    setView('edit');
  };

  const handleDelete = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const handleSave = () => {
    if (editingPost) {
      setPosts(prev => {
        const existingIndex = prev.findIndex(p => p.id === editingPost.id);
        if (existingIndex >= 0) {
          const newPosts = [...prev];
          newPosts[existingIndex] = editingPost;
          return newPosts;
        } else {
          return [editingPost, ...prev];
        }
      });
    }
    setView('list');
    setEditingPost(null);
  };

  // Mock functions for additional images
  const addAdditionalImage = (index: number) => {
    if (!editingPost) return;
    const newImages = [...editingPost.additionalImages];
    newImages[index] = '/api/placeholder/200/200'; // Mock upload
    setEditingPost({ ...editingPost, additionalImages: newImages });
  };

  const removeAdditionalImage = (index: number) => {
    if (!editingPost) return;
    const newImages = [...editingPost.additionalImages];
    newImages[index] = null;
    setEditingPost({ ...editingPost, additionalImages: newImages });
  };

  if (view === 'edit' && editingPost) {
    return (
      <div className="max-w-4xl mx-auto pb-12">
        {/* Editor Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <button 
              onClick={() => setView('list')}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-2 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Updates
            </button>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              {editingPost.title ? 'Edit Update' : 'New Update'}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={editingPost.status}
              onChange={(e) => setEditingPost({...editingPost, status: e.target.value as 'Published' | 'Draft'})}
              className={`border rounded-lg py-2 px-4 outline-none font-medium text-sm ${
                editingPost.status === 'Published' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-gray-50 border-gray-200 text-gray-700'
              }`}
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
            <button 
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Save className="w-4 h-4" /> Save Post
            </button>
          </div>
        </div>

        {/* Editor Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-8">
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Post Title</label>
              <input
                type="text"
                value={editingPost.title}
                onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                placeholder="e.g. New Summer Menu!"
                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Tag className="w-4 h-4 text-gray-400" />
                  </div>
                  <select
                    value={editingPost.category}
                    onChange={(e) => setEditingPost({...editingPost, category: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  >
                    {BLOG_CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Publish Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    value={editingPost.date}
                    onChange={(e) => setEditingPost({...editingPost, date: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Main Cover Image</label>
              <button className="w-full h-[46px] border-2 border-dashed border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-colors flex items-center justify-center gap-2 text-gray-500 hover:text-blue-600">
                <ImageIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Upload Cover</span>
              </button>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Additional Images Section */}
          <div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">Additional Images</label>
              <p className="text-xs text-gray-500 mt-0.5">Upload up to 5 supplementary images to display within the article body or gallery.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {editingPost.additionalImages.map((imgUrl, index) => (
                <div key={index} className="aspect-square relative group">
                  {imgUrl ? (
                    <div className="w-full h-full rounded-lg border border-gray-200 overflow-hidden relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={imgUrl} alt={`Additional ${index + 1}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          onClick={() => removeAdditionalImage(index)}
                          className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full shadow transform scale-90 group-hover:scale-100 transition-all"
                          title="Remove Image"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => addAdditionalImage(index)}
                      className="w-full h-full rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 flex flex-col items-center justify-center text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <Upload className="w-5 h-5 mb-1" />
                      <span className="text-[10px] font-medium uppercase tracking-wide">Image {index + 1}</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Short Excerpt (Optional)</label>
              <textarea
                value={editingPost.excerpt}
                onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                placeholder="A brief summary for the blog list view..."
                rows={2}
                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center justify-between">
                Full Content
                <span className="text-xs text-gray-400 font-normal border border-gray-200 px-2 py-0.5 rounded bg-gray-50">Markdown Supported</span>
              </label>
              <textarea
                value={editingPost.content}
                onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                placeholder="Write your blog post content here..."
                rows={12}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y font-mono text-sm leading-relaxed"
              />
            </div>
          </div>

        </div>
      </div>
    );
  }

  // LIST VIEW
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Updates & Blog</h2>
          <p className="text-gray-500 mt-2 text-lg">Manage news, announcements, and blog posts.</p>
        </div>
        <button 
          onClick={handleAddNew}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5" />
          Create New Update
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {posts.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {posts.map(post => (
              <div key={post.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                <div className="flex items-center gap-6 flex-1 min-w-0">
                  {/* Thumbnail */}
                  <div className="w-24 h-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                    {post.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.coverImage} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-gray-300" />
                    )}
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0 pr-4">
                    <h4 className="font-bold text-gray-900 text-lg truncate mb-1">{post.title || 'Untitled Post'}</h4>
                    <div className="flex items-center gap-3 text-sm mt-1">
                      <span className="bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded text-xs font-semibold border border-indigo-100">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className={`px-2 py-0.5 rounded-md text-xs font-medium border ${
                        post.status === 'Published' 
                          ? 'bg-green-50 text-green-700 border-green-200' 
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}>
                        {post.status === 'Published' ? <Globe className="w-3 h-3 inline mr-1" /> : <FileEdit className="w-3 h-3 inline mr-1" />}
                        {post.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button 
                    onClick={() => handleEdit(post)}
                    className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100"
                    title="Edit Post"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleDelete(post.id)}
                    className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                    title="Delete Post"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center px-4">
            <div className="bg-gray-50 p-4 rounded-full mb-4">
              <ImageIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No updates yet</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              You haven&apos;t published any news or announcements. Create your first post to keep your customers updated!
            </p>
            <button 
              onClick={handleAddNew}
              className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> Create First Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
