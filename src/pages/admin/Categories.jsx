import React, { useState } from 'react';
import { Plus, Settings2, MoreHorizontal, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const mockCategories = [
  { id: 1, name: "Healthcare", slug: "healthcare", providers: 142, status: "Active" },
  { id: 2, name: "Legal Services", slug: "legal-services", providers: 89, status: "Active" },
  { id: 3, name: "Education & Tutoring", slug: "education", providers: 111, status: "Active" },
  { id: 4, name: "Home Maintenance", slug: "home-maintenance", providers: 0, status: "Draft" },
];

const AdminCategories = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Taxonomy & Categories</h1>
          <p className="text-slate-500 font-medium mt-1">Manage global platform categories and professional tagging.</p>
        </div>

        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="font-bold bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" /> New Category
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create Parent Category</DialogTitle>
              <DialogDescription>
                This will appear in the main navigation and search filters for customers.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="space-y-2">
                <Label htmlFor="catName">Category Name</Label>
                <Input id="catName" placeholder="e.g. Wellness & Fitness" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="catDesc">Description</Label>
                <Textarea id="catDesc" placeholder="Brief description of services included..." rows={3} />
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4">
                <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" /> Compliance Rules
                </h4>
                <div className="flex items-center justify-between">
                  <Label htmlFor="reqLic" className="cursor-pointer">Require Professional License Upload</Label>
                  <Switch id="reqLic" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="reqBg" className="cursor-pointer">Require Background Check</Label>
                  <Switch id="reqBg" />
                </div>
              </div>

            </div>
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
              <Button onClick={() => setIsAddModalOpen(false)} className="bg-blue-600">Save Category</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-3">
          <Settings2 className="w-5 h-5 text-slate-400" />
          <h3 className="font-bold text-slate-900">Active Taxonomy</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-slate-900">Category Name</TableHead>
              <TableHead className="font-semibold text-slate-900">Slug</TableHead>
              <TableHead className="font-semibold text-slate-900 text-center">Active Providers</TableHead>
              <TableHead className="font-semibold text-slate-900">Status</TableHead>
              <TableHead className="text-right font-semibold text-slate-900">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCategories.map((cat) => (
              <TableRow key={cat.id}>
                <TableCell className="font-bold text-slate-900">{cat.name}</TableCell>
                <TableCell className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded inline-block mt-2">{cat.slug}</TableCell>
                <TableCell className="text-center font-semibold text-slate-700">{cat.providers}</TableCell>
                <TableCell>
                  <Badge 
                    variant={cat.status === 'Active' ? 'default' : 'secondary'}
                    className={cat.status === 'Active' ? 'bg-emerald-100 text-emerald-800 border-none' : 'bg-slate-100 text-slate-600'}
                  >
                    {cat.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-amber-800">Taxonomy Lock</h4>
          <p className="text-sm text-amber-700 mt-1">Changing category slugs will break active URLs. Proceed with caution when editing active categories.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
