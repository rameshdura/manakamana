'use client';

import { useState } from 'react';
import { GripVertical, Plus, Trash2, ArrowUp, ArrowDown, Edit2, Save, X } from 'lucide-react';

type Category = {
  id: string;
  name: string;
  description: string;
  isVisible: boolean;
};

export default function CategoriesManager() {
  const [categories, setCategories] = useState<Category[]>([
    { id: '1', name: 'Starters', description: 'Small plates to begin your meal', isVisible: true },
    { id: '2', name: 'Main Courses', description: 'Hearty dishes for the main event', isVisible: true },
    { id: '3', name: 'Desserts', description: 'Sweet treats to finish', isVisible: true },
    { id: '4', name: 'Beverages', description: 'Refreshing drinks and cocktails', isVisible: true },
  ]);

  const [otherCategory, setOtherCategory] = useState<Category>({
    id: 'other', 
    name: 'Other', 
    description: 'Uncategorized items and miscellaneous', 
    isVisible: true 
  });

  const [newCategoryName, setNewCategoryName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ name: '', description: '' });

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    
    setCategories([...categories, { 
      id: Date.now().toString(), 
      name: newCategoryName,
      description: 'New category description...',
      isVisible: true
    }]);
    setNewCategoryName('');
  };

  const handleDelete = (id: string) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  const toggleVisibility = (id: string, isOther: boolean = false) => {
    if (isOther) {
      setOtherCategory({ ...otherCategory, isVisible: !otherCategory.isVisible });
    } else {
      setCategories(categories.map(c => 
        c.id === id ? { ...c, isVisible: !c.isVisible } : c
      ));
    }
  };

  const startEdit = (category: Category) => {
    setEditingId(category.id);
    setEditForm({ name: category.name, description: category.description });
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const saveEdit = (id: string, isOther: boolean = false) => {
    if (isOther) {
      setOtherCategory({ ...otherCategory, name: editForm.name, description: editForm.description });
    } else {
      setCategories(categories.map(c => 
        c.id === id ? { ...c, name: editForm.name, description: editForm.description } : c
      ));
    }
    setEditingId(null);
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newCats = [...categories];
    const temp = newCats[index];
    newCats[index] = newCats[index - 1];
    newCats[index - 1] = temp;
    setCategories(newCats);
  };

  const moveDown = (index: number) => {
    if (index === categories.length - 1) return;
    const newCats = [...categories];
    const temp = newCats[index];
    newCats[index] = newCats[index + 1];
    newCats[index + 1] = temp;
    setCategories(newCats);
  };

  const renderCategoryRow = (category: Category, index: number | null, isOther: boolean = false) => {
    const isEditing = editingId === category.id;

    if (isEditing) {
      return (
        <div key={category.id} className="p-4 bg-blue-50 border-y border-blue-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1 space-y-3 w-full">
            <div>
              <label className="block text-xs font-medium text-blue-800 mb-1">Name</label>
              <input 
                type="text" 
                value={editForm.name} 
                onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                className="w-full border border-blue-200 rounded px-3 py-1.5 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-blue-800 mb-1">Description</label>
              <input 
                type="text" 
                value={editForm.description} 
                onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                className="w-full border border-blue-200 rounded px-3 py-1.5 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button onClick={() => saveEdit(category.id, isOther)} className="bg-blue-600 text-white px-3 py-1.5 rounded flex items-center gap-1 hover:bg-blue-700 text-sm font-medium">
              <Save className="w-4 h-4" /> Save
            </button>
            <button onClick={cancelEdit} className="bg-white text-gray-600 border border-gray-300 px-3 py-1.5 rounded flex items-center gap-1 hover:bg-gray-50 text-sm font-medium">
              <X className="w-4 h-4" /> Cancel
            </button>
          </div>
        </div>
      );
    }

    return (
      <div key={category.id} className={`p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group ${!category.isVisible ? 'opacity-60 bg-gray-50' : ''}`}>
        <div className="flex items-center gap-4">
          <div className={`text-gray-400 ${isOther ? 'opacity-0 cursor-default' : 'cursor-move'}`}>
            <GripVertical className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className={`font-semibold text-lg ${category.isVisible ? 'text-gray-900' : 'text-gray-500 line-through'}`}>
                {category.name}
              </h4>
              {!category.isVisible && (
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium">Hidden</span>
              )}
              {isOther && (
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-medium border border-purple-200">System (Fixed)</span>
              )}
            </div>
            <p className="text-sm text-gray-500">{category.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          {/* Show/Hide Toggle */}
          <button
            onClick={() => toggleVisibility(category.id, isOther)}
            className={`mr-3 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
              category.isVisible ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            role="switch"
            aria-checked={category.isVisible}
            title={category.isVisible ? "Hide Category" : "Show Category"}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                category.isVisible ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>

          {/* Up/Down controls (only for standard categories) */}
          {!isOther && index !== null && (
            <div className="flex items-center">
              <button 
                onClick={() => moveUp(index)}
                disabled={index === 0}
                className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400"
                title="Move Up"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
              <button 
                onClick={() => moveDown(index)}
                disabled={index === categories.length - 1}
                className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-400"
                title="Move Down"
              >
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="w-px h-6 bg-gray-200 mx-1"></div>

          {/* Edit Button */}
          <button 
            onClick={() => startEdit(category)}
            className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
            title="Edit Category"
          >
            <Edit2 className="w-5 h-5" />
          </button>

          {/* Delete Button (only for standard categories) */}
          {!isOther && (
            <button 
              onClick={() => handleDelete(category.id)}
              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
              title="Delete Category"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Menu Categories</h2>
        <p className="text-gray-500 mt-2 text-lg">Manage visibility, edit details, and reorder the food categories displayed on your menu.</p>
      </div>

      {/* Add New Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Category</h3>
        <form onSubmit={handleAddCategory} className="flex gap-4">
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="e.g. Chef's Specials"
            className="flex-1 border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Category
          </button>
        </form>
      </div>

      {/* Categories List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Custom Categories</h3>
          <span className="text-sm text-gray-500 font-medium">Reorder & Manage</span>
        </div>
        
        <div className="divide-y divide-gray-100">
          {categories.map((category, index) => renderCategoryRow(category, index, false))}
          
          {categories.length === 0 && (
            <div className="p-8 text-center text-gray-500 italic">
              No categories created yet. Add your first category above!
            </div>
          )}
        </div>
      </div>

      {/* Fixed Other Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden border-l-4 border-l-purple-500">
        <div className="px-6 py-4 border-b border-gray-200 bg-purple-50/50 flex justify-between items-center">
          <h3 className="text-lg font-medium text-purple-900">System Category</h3>
          <span className="text-sm text-purple-600 font-medium bg-purple-100 px-2.5 py-0.5 rounded-full">Fixed at bottom</span>
        </div>
        <div className="divide-y divide-gray-100">
          {renderCategoryRow(otherCategory, null, true)}
        </div>
      </div>
    </div>
  );
}
