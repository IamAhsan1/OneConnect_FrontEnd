import React, { useState } from 'react';
import { UserPlus, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockStaff = [
  { id: 1, name: "Jessica Taylor", email: "jessica@clinic.com", role: "Manager", status: "Active" },
  { id: 2, name: "David Chen", email: "david@clinic.com", role: "Receptionist", status: "Active" },
  { id: 3, name: "Emma Wilson", email: "emma@clinic.com", role: "Junior Doctor", status: "Inactive" },
];

const ProviderStaff = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Staff Management</h1>
          <p className="text-slate-500 font-medium mt-1">Delegate access and manage your team's permissions.</p>
        </div>

        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="font-bold bg-blue-600 hover:bg-blue-700">
              <UserPlus className="w-4 h-4 mr-2" /> Invite Staff
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Invite a new staff member</DialogTitle>
              <DialogDescription>
                They will receive an email with instructions to set up their account.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="e.g. John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@clinic.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role / Permissions</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manager">Manager (Full Access)</SelectItem>
                    <SelectItem value="receptionist">Receptionist (Calendar Only)</SelectItem>
                    <SelectItem value="viewer">Viewer (Read Only)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
              <Button onClick={() => setIsAddModalOpen(false)}>Send Invitation</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="font-semibold text-slate-900">Staff Member</TableHead>
              <TableHead className="font-semibold text-slate-900">Role</TableHead>
              <TableHead className="font-semibold text-slate-900">Status</TableHead>
              <TableHead className="text-right font-semibold text-slate-900">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockStaff.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell>
                  <div className="font-semibold text-slate-900">{staff.name}</div>
                  <div className="text-sm text-slate-500">{staff.email}</div>
                </TableCell>
                <TableCell>
                  <span className="text-sm font-medium text-slate-700">{staff.role}</span>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={staff.status === 'Active' ? 'default' : 'secondary'}
                    className={staff.status === 'Active' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-none' : ''}
                  >
                    {staff.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-600">
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-600 ml-1">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {mockStaff.length === 0 && (
          <div className="p-8 text-center text-slate-500">
            No staff members added yet.
          </div>
        )}
      </div>

    </div>
  );
};

export default ProviderStaff;
