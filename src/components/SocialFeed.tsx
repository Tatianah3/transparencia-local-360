import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import {
  Heart,
  MessageCircle,
  Share2,
  MoreVertical,
  Send,
  MapPin,
  Clock,
  Trash2,
  Flag,
  CheckCircle2,
  Shield,
  AlertTriangle,
  UserX,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { toast } from "sonner@2.0.3";
import { VerificationGuide } from "./VerificationGuide";

interface Post {
  id: string;
  author: {
    name: string;
    isAnonymous: boolean;
    avatar: string;
    location: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  verifications: number;
  reports: number;
  isVerifiedByUser: boolean;
  verificationType: "official" | "verified" | "review" | "unverified";
  projectTag?: {
    name: string;
    sector: string;
  };
  image?: string;
}

export function SocialFeed() {
  const [newPost, setNewPost] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: {
        name: "Municipalidad de Curridabat",
        isAnonymous: false,
        avatar: "MC",
        location: "Oficial",
      },
      content:
        "📢 Actualización oficial: El Puente Vehicular Los Pinos está en su fase final de construcción. Se estima que estará operativo en junio 2025. Agradecemos su paciencia durante este proceso. #TransparenciaLocal",
      timestamp: "Hace 1 día",
      likes: 89,
      comments: 23,
      shares: 15,
      isLiked: true,
      verifications: 45,
      reports: 0,
      isVerifiedByUser: false,
      verificationType: "official",
      projectTag: {
        name: "Puente Vehicular Los Pinos",
        sector: "Obras Públicas y Transportes",
      },
    },
    {
      id: "2",
      author: {
        name: "María González",
        isAnonymous: false,
        avatar: "MG",
        location: "Curridabat Centro",
      },
      content:
        "Visité el nuevo Centro de Salud en construcción y me alegra ver que están avanzando bien. Las instalaciones se ven modernas y espaciosas. ¡Excelente trabajo del equipo municipal! 🏥 Adjunto foto del progreso.",
      timestamp: "Hace 2 horas",
      likes: 24,
      comments: 8,
      shares: 3,
      isLiked: false,
      verifications: 12,
      reports: 0,
      isVerifiedByUser: false,
      verificationType: "verified",
      projectTag: {
        name: "Centro de Salud Comunitario",
        sector: "Salud",
      },
    },
    {
      id: "3",
      author: {
        name: "Usuario Anónimo #7342",
        isAnonymous: true,
        avatar: "?",
        location: "Granadilla",
      },
      content:
        "He notado que el proyecto del Parque Central ha tenido algunos retrasos en la zona de juegos infantiles. ¿Alguien sabe si hay una nueva fecha estimada de finalización? Sería bueno mantener a la comunidad informada sobre estos cambios.",
      timestamp: "Hace 5 horas",
      likes: 15,
      comments: 12,
      shares: 2,
      isLiked: true,
      verifications: 7,
      reports: 0,
      isVerifiedByUser: false,
      verificationType: "review",
      projectTag: {
        name: "Parque Central Sostenible",
        sector: "Ambiente y Energía",
      },
    },
    {
      id: "4",
      author: {
        name: "Carlos Ramírez",
        isAnonymous: false,
        avatar: "CR",
        location: "Sánchez",
      },
      content:
        "Propongo que el proyecto de la Biblioteca Digital incluya talleres de alfabetización tecnológica para adultos mayores. Sería un gran beneficio para la comunidad y promovería la inclusión digital. ¿Qué opinan?",
      timestamp: "Hace 2 días",
      likes: 42,
      comments: 18,
      shares: 7,
      isLiked: false,
      verifications: 2,
      reports: 0,
      isVerifiedByUser: false,
      verificationType: "unverified",
      projectTag: {
        name: "Biblioteca Municipal Digital",
        sector: "Cultura",
      },
    },
  ]);

  const handleVerify = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const newVerifications = post.isVerifiedByUser
            ? post.verifications - 1
            : post.verifications + 1;
          const newIsVerified = !post.isVerifiedByUser;

          // Determine new verification type
          let newType: Post["verificationType"] = "unverified";
          if (post.verificationType === "official") {
            newType = "official";
          } else if (newVerifications >= 10) {
            newType = "verified";
          } else if (newVerifications >= 3) {
            newType = "review";
          }

          if (!post.isVerifiedByUser) {
            toast.success("¡Gracias por verificar esta información!", {
              description: `Verificaciones: ${newVerifications}`,
            });
          }

          return {
            ...post,
            verifications: newVerifications,
            isVerifiedByUser: newIsVerified,
            verificationType: newType,
          };
        }
        return post;
      }),
    );
  };

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  };

  const handleReport = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const newReports = post.reports + 1;
          if (newReports >= 3) {
            toast.warning("Publicación reportada múltiples veces", {
              description: "El equipo municipal revisará este contenido.",
            });
          } else {
            toast.info("Reporte enviado. El equipo lo revisará pronto.");
          }
          return { ...post, reports: newReports };
        }
        return post;
      }),
    );
  };

  const handleDelete = (postId: string) => {
    setPosts(posts.filter((post) => post.id !== postId));
    toast.success("Publicación eliminada correctamente");
  };

  const handlePost = () => {
    if (!newPost.trim()) return;

    const randomId = Math.floor(1000 + Math.random() * 9000);
    const newPostObj: Post = {
      id: Date.now().toString(),
      author: {
        name: isAnonymous ? `Usuario Anónimo #${randomId}` : "Tú",
        isAnonymous: isAnonymous,
        avatar: isAnonymous ? "?" : "YO",
        location: "Curridabat",
      },
      content: newPost,
      timestamp: "Justo ahora",
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      verifications: 0,
      reports: 0,
      isVerifiedByUser: false,
      verificationType: "unverified",
    };

    setPosts([newPostObj, ...posts]);
    setNewPost("");
    setIsExpanded(false);
    setIsAnonymous(false);
    toast.success(
      isAnonymous
        ? "¡Publicación anónima creada!"
        : "¡Publicación creada correctamente!",
      {
        description: "Será revisada por el equipo municipal en 3-5 días.",
      },
    );
  };

  const getSectorColor = (sector: string) => {
    const colors: Record<string, string> = {
      Salud: "bg-red-100 text-red-700 border-red-300",
      "Obras Públicas y Transportes": "bg-blue-100 text-blue-700 border-blue-300",
      Cultura: "bg-purple-100 text-purple-700 border-purple-300",
      "Ambiente y Energía": "bg-green-100 text-green-700 border-green-300",
      "Seguridad Ciudadana y Justicia":
        "bg-orange-100 text-orange-700 border-orange-300",
      "Planes Conjuntos": "bg-indigo-100 text-indigo-700 border-indigo-300",
    };
    return colors[sector] || "bg-gray-100 text-gray-700 border-gray-300";
  };

  const getVerificationBadge = (type: Post["verificationType"]) => {
    const badges = {
      official: {
        label: "Fuente Oficial",
        icon: "🏛️",
        color: "bg-blue-500 text-white",
        description: "Publicación verificada de entidad gubernamental",
      },
      verified: {
        label: "Verificado",
        icon: "✓",
        color: "bg-green-500 text-white",
        description: "Contenido validado por 10+ ciudadanos",
      },
      review: {
        label: "En Revisión",
        icon: "⏳",
        color: "bg-yellow-500 text-white",
        description: "3-9 verificaciones, pendiente de validación",
      },
      unverified: {
        label: "Sin Verificar",
        icon: "⚪",
        color: "bg-gray-400 text-white",
        description: "Información nueva sin validar",
      },
    };
    return badges[type];
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Info Banner */}
      <Card className="p-4 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <div className="flex items-start gap-3">
          <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="text-gray-900 mb-1">
              Sistema de Verificación Ciudadana
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Ayuda a mantener la calidad de la información verificando
              publicaciones. Tu participación crea una comunidad más transparente
              y confiable.
            </p>
            <VerificationGuide />
          </div>
        </div>
      </Card>

      {/* Create Post Card */}
      <Card className="p-4 bg-white shadow-md">
        <div className="flex gap-3">
          <Avatar
            className={`h-10 w-10 ${isAnonymous ? "bg-gray-400" : "bg-gradient-to-br from-blue-500 to-green-500"}`}
          >
            <AvatarFallback
              className={`${isAnonymous ? "bg-gray-400" : "bg-transparent"} text-white`}
            >
              {isAnonymous ? "?" : "YO"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="Comparte información, sugerencias o comentarios sobre proyectos públicos..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              className={`min-h-[${isExpanded ? "120px" : "60px"}] resize-none transition-all`}
            />
            {isExpanded && (
              <div className="space-y-3 mt-3 pt-3 border-t">
                {/* Anonymous Toggle */}
                <div className="flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <UserX className="h-4 w-4 text-purple-600" />
                    <div>
                      <Label htmlFor="post-anonymous" className="text-sm mb-0">
                        Publicar de forma anónima
                      </Label>
                      <p className="text-xs text-gray-600">
                        Tu identidad no será visible públicamente
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="post-anonymous"
                    checked={isAnonymous}
                    onCheckedChange={setIsAnonymous}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>Curridabat</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setIsExpanded(false);
                        setNewPost("");
                        setIsAnonymous(false);
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      size="sm"
                      onClick={handlePost}
                      disabled={!newPost.trim()}
                      style={{ backgroundColor: "#1976D2" }}
                      className="text-white"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Publicar
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Feed */}
      <div className="space-y-4">
        {posts.map((post) => {
          const verificationBadge = getVerificationBadge(post.verificationType);
          const isReported = post.reports >= 3;

          return (
            <Card
              key={post.id}
              className={`p-6 bg-white shadow-md hover:shadow-lg transition-shadow ${
                isReported ? "border-2 border-red-300 bg-red-50" : ""
              }`}
            >
              {/* Post Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <Avatar
                    className={`h-12 w-12 ${
                      post.author.isAnonymous
                        ? "bg-gray-400"
                        : "bg-gradient-to-br from-blue-500 to-green-500"
                    }`}
                  >
                    <AvatarFallback
                      className={`${
                        post.author.isAnonymous ? "bg-gray-400" : "bg-transparent"
                      } text-white`}
                    >
                      {post.author.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-gray-900 mb-0">{post.author.name}</h4>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge className={verificationBadge.color}>
                              <span className="mr-1">{verificationBadge.icon}</span>
                              {verificationBadge.label}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">{verificationBadge.description}</p>
                            <p className="text-xs mt-1">
                              Verificaciones: {post.verifications}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-3 w-3" />
                      <span>{post.author.location}</span>
                      <span>•</span>
                      <Clock className="h-3 w-3" />
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                </div>

                {/* Options Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleDelete(post.id)}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Eliminar
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleReport(post.id)}>
                      <Flag className="h-4 w-4 mr-2" />
                      Reportar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Report Warning */}
              {isReported && (
                <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-red-800">
                    <AlertTriangle className="h-4 w-4" />
                    <span>
                      Esta publicación ha sido reportada múltiples veces y está en
                      revisión.
                    </span>
                  </div>
                </div>
              )}

              {/* Post Content */}
              <p className="text-gray-800 mb-4 leading-relaxed">{post.content}</p>

              {/* Project Tag */}
              {post.projectTag && (
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className={`${getSectorColor(post.projectTag.sector)}`}
                  >
                    🏗️ {post.projectTag.name}
                  </Badge>
                </div>
              )}

              {/* Verification Stats */}
              {post.verificationType !== "official" && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg border">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">
                        <strong>{post.verifications}</strong> verificaciones
                      </span>
                    </div>
                    {post.reports > 0 && (
                      <div className="flex items-center gap-2">
                        <Flag className="h-4 w-4 text-red-600" />
                        <span className="text-gray-700">
                          <strong>{post.reports}</strong> reportes
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Post Actions */}
              <div className="flex items-center gap-4 pt-4 border-t">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                  className={`gap-2 ${post.isLiked ? "text-red-500" : "text-gray-600"}`}
                >
                  <Heart
                    className={`h-4 w-4 ${post.isLiked ? "fill-current" : ""}`}
                  />
                  <span>{post.likes}</span>
                </Button>

                <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments}</span>
                </Button>

                <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
                  <Share2 className="h-4 w-4" />
                  <span>{post.shares}</span>
                </Button>

                {post.verificationType !== "official" && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={post.isVerifiedByUser ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleVerify(post.id)}
                          className={`gap-2 ml-auto ${
                            post.isVerifiedByUser
                              ? "bg-green-600 hover:bg-green-700 text-white"
                              : ""
                          }`}
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          <span>
                            {post.isVerifiedByUser ? "Verificado" : "Verificar"}
                          </span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">
                          {post.isVerifiedByUser
                            ? "Ya verificaste esta publicación"
                            : "Verifica si la información es correcta"}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="w-full">
          Cargar más publicaciones
        </Button>
      </div>
    </div>
  );
}
