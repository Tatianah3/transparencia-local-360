import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import {
  BookOpen,
  Shield,
  CheckCircle,
  AlertTriangle,
  Users,
  Eye,
} from "lucide-react";

export function VerificationGuide() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <BookOpen className="h-4 w-4" />
          Guía de Verificación
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Guía de Verificación Ciudadana
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Intro */}
          <Card className="p-4 bg-blue-50 border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>¿Por qué verificar información?</strong> La verificación
              ciudadana ayuda a mantener la calidad y confiabilidad de la
              plataforma, creando una comunidad transparente y responsable.
            </p>
          </Card>

          {/* Verification Levels */}
          <div>
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Niveles de Verificación
            </h3>
            <div className="space-y-3">
              <Card className="p-4 border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-500 text-white">
                    🏛️ Fuente Oficial
                  </Badge>
                </div>
                <p className="text-sm text-gray-700">
                  Publicaciones verificadas de entidades gubernamentales
                  (Municipalidad, MIDEPLAN, etc.)
                </p>
              </Card>

              <Card className="p-4 border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-500 text-white">✓ Verificado</Badge>
                </div>
                <p className="text-sm text-gray-700">
                  Contenido validado por 10+ ciudadanos verificadores o equipo
                  municipal
                </p>
              </Card>

              <Card className="p-4 border-yellow-200">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-yellow-500 text-white">⏳ En Revisión</Badge>
                </div>
                <p className="text-sm text-gray-700">
                  Publicaciones con 3-9 verificaciones ciudadanas, pendientes de
                  validación final
                </p>
              </Card>

              <Card className="p-4 border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-gray-400 text-white">⚪ Sin Verificar</Badge>
                </div>
                <p className="text-sm text-gray-700">
                  Información nueva que aún no ha sido validada (menos de 3
                  verificaciones)
                </p>
              </Card>
            </div>
          </div>

          {/* How to Verify */}
          <div>
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="h-5 w-5 text-purple-600" />
              Cómo Verificar Información
            </h3>
            <Card className="p-4">
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">1.</span>
                  <div>
                    <strong>Lee cuidadosamente:</strong> Analiza el contenido de la
                    publicación completa antes de verificar.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">2.</span>
                  <div>
                    <strong>Verifica evidencia:</strong> Si hay fotos, documentos o
                    enlaces, revísalos para confirmar su autenticidad.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">3.</span>
                  <div>
                    <strong>Compara con fuentes:</strong> Contrasta con información
                    oficial o tu propia experiencia personal.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">4.</span>
                  <div>
                    <strong>Click en "Verificar":</strong> Solo si estás seguro de
                    que la información es correcta y útil.
                  </div>
                </li>
              </ol>
            </Card>
          </div>

          {/* When to Verify */}
          <div>
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Cuándo Verificar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Card className="p-4 bg-green-50 border-green-200">
                <h4 className="text-green-900 mb-2">✅ SÍ Verificar:</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Información que puedes confirmar personalmente</li>
                  <li>• Datos con evidencia fotográfica clara</li>
                  <li>• Reportes de fuentes oficiales</li>
                  <li>• Sugerencias constructivas bien fundamentadas</li>
                </ul>
              </Card>

              <Card className="p-4 bg-red-50 border-red-200">
                <h4 className="text-red-900 mb-2">❌ NO Verificar:</h4>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Rumores o información sin confirmar</li>
                  <li>• Opiniones personales sin fundamento</li>
                  <li>• Contenido que no has podido contrastar</li>
                  <li>• Publicaciones con lenguaje ofensivo</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Reporting */}
          <div>
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Reportar Contenido Inapropiado
            </h3>
            <Card className="p-4 bg-orange-50 border-orange-200">
              <p className="text-sm text-orange-900 mb-3">
                <strong>Usa el botón "Reportar" si encuentras:</strong>
              </p>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• Información falsa o engañosa</li>
                <li>• Lenguaje ofensivo o discriminatorio</li>
                <li>• Spam o publicidad no relacionada</li>
                <li>• Ataques personales o acoso</li>
                <li>• Contenido fuera de tema</li>
              </ul>
              <p className="text-sm text-orange-900 mt-3">
                Las publicaciones con 3+ reportes se ocultan automáticamente hasta
                revisión del equipo municipal.
              </p>
            </Card>
          </div>

          {/* Community Guidelines */}
          <div>
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-indigo-600" />
              Normas de la Comunidad
            </h3>
            <Card className="p-4">
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong className="text-indigo-600">Respeto:</strong> Trata a
                  todos los usuarios con respeto, incluso cuando no estés de acuerdo.
                </p>
                <p>
                  <strong className="text-indigo-600">Honestidad:</strong> Verifica
                  solo lo que puedes confirmar. No uses el sistema de manera
                  maliciosa.
                </p>
                <p>
                  <strong className="text-indigo-600">Transparencia:</strong> Si
                  usas anonimato, asegúrate de que sea por razones legítimas de
                  seguridad.
                </p>
                <p>
                  <strong className="text-indigo-600">Responsabilidad:</strong> Tu
                  participación afecta a toda la comunidad. Actúa con
                  responsabilidad.
                </p>
              </div>
            </Card>
          </div>

          {/* Close Button */}
          <div className="flex justify-end pt-4">
            <DialogTrigger asChild>
              <Button>Entendido</Button>
            </DialogTrigger>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
