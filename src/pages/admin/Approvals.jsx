import React, { useState } from 'react';
import { FileText, CheckCircle2, XCircle, Search, FileBadge2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const mockPendingProviders = [
  { id: "P-1042", name: "Dr. Ahmed Khan", category: "Healthcare", submittedAt: "2 hours ago", status: "Pending Review" },
  { id: "P-1043", name: "Sarah Williams Esq.", category: "Legal Services", submittedAt: "5 hours ago", status: "Pending Review" },
  { id: "P-1045", name: "Michael Chang", category: "Education", submittedAt: "1 day ago", status: "Action Required" },
];

const AdminApprovals = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Provider Approvals</h1>
          <p className="text-slate-500 font-medium mt-1">Verify credentials and approve new accounts.</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input placeholder="Search ID or Name..." className="pl-9 bg-white" />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="font-semibold text-slate-900">Candidate ID</TableHead>
              <TableHead className="font-semibold text-slate-900">Name</TableHead>
              <TableHead className="font-semibold text-slate-900">Category</TableHead>
              <TableHead className="font-semibold text-slate-900">Submitted</TableHead>
              <TableHead className="font-semibold text-slate-900">Status</TableHead>
              <TableHead className="text-right font-semibold text-slate-900">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPendingProviders.map((provider) => (
              <TableRow key={provider.id}>
                <TableCell className="font-mono text-sm text-slate-500">{provider.id}</TableCell>
                <TableCell className="font-bold text-slate-900">{provider.name}</TableCell>
                <TableCell className="font-medium text-slate-600">{provider.category}</TableCell>
                <TableCell className="text-sm text-slate-500">{provider.submittedAt}</TableCell>
                <TableCell>
                  <Badge 
                    className={provider.status === 'Pending Review' ? 'bg-amber-100 text-amber-800 hover:bg-amber-100 border-none' : 'bg-red-100 text-red-800 hover:bg-red-100 border-none'}
                  >
                    {provider.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="font-bold" onClick={() => setSelectedProvider(provider)}>
                        Review Profile
                      </Button>
                    </DialogTrigger>
                    
                    {/* Review Modal */}
                    <DialogContent className="sm:max-w-[800px]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl flex items-center gap-2">
                          <FileBadge2 className="w-6 h-6 text-blue-600" /> Provider Verification
                        </DialogTitle>
                        <DialogDescription>
                          Review the submitted documentation before approving this account.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-y border-slate-100 mt-2 mb-4">
                        {/* Profile Info */}
                        <div className="space-y-6">
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Applicant Name</p>
                            <p className="font-bold text-lg text-slate-900">{provider.name}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Target Category</p>
                            <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 border-none">{provider.category}</Badge>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Contact Email</p>
                            <p className="font-medium text-slate-700">contact@example.com</p>
                          </div>
                        </div>

                        {/* Documents View */}
                        <div className="space-y-4">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Submitted Documents</p>
                          
                          <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="w-8 h-8 text-blue-500" />
                              <div>
                                <p className="text-sm font-bold text-slate-900">Government_ID.pdf</p>
                                <p className="text-xs text-slate-500">2.4 MB</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-blue-600">View</Button>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="w-8 h-8 text-blue-500" />
                              <div>
                                <p className="text-sm font-bold text-slate-900">Medical_License_2026.pdf</p>
                                <p className="text-xs text-slate-500">1.1 MB</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-blue-600">View</Button>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row justify-end gap-3">
                        <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 font-bold">
                          <XCircle className="w-4 h-4 mr-2" /> Reject Application
                        </Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700 font-bold">
                          <CheckCircle2 className="w-4 h-4 mr-2" /> Approve Provider
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {mockPendingProviders.length === 0 && (
          <div className="p-12 text-center text-slate-500">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900">All Caught Up!</h3>
            <p>There are no pending provider applications.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminApprovals;
