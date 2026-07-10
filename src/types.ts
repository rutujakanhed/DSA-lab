export interface Experiment {
  id: string;
  title: string;
  category: string;
  icon: string; // lucide icon name
  shortDesc: string;
  objective: string;
  algorithm: string[];
  pseudocode: string;
  complexity: {
    time: string;
    space: string;
  };
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  expertise: string;
  email: string;
  photoUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'lab' | 'activity' | 'infrastructure';
  imageUrl: string;
}

export interface ReferenceBook {
  title: string;
  author: string;
  publisher: string;
}

export interface OnlineResource {
  title: string;
  url: string;
  type: 'video' | 'practice' | 'documentation';
  description: string;
}
