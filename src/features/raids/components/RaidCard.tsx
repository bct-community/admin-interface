import { format, isBefore } from "date-fns";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const RaidSchema = z.object({
  _id: z.string(),
  date: z.string(),
  platform: z.string(),
  url: z.string(),
  shareMessage: z.string(),
  content: z.string(),
});

type Raid = z.infer<typeof RaidSchema>;

const RaidCard = ({
  _id,
  date,
  platform,
  url,
  shareMessage,
  content,
}: Raid) => {
  const formattedDate = format(new Date(date), "dd/MM/yyyy");
  const isPast = isBefore(new Date(date), new Date());

  const [editedContent, setContent] = useState(content);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card className="h-32 select-none min-h-32 w-80 hover:cursor-pointer">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{platform}</span>
              <Badge variant={isPast ? "destructive" : "outline"}>
                {formattedDate}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="w-80 max-w-80">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="pr-10 truncate max-w-80">
                    {shareMessage}
                  </TooltipTrigger>
                  <TooltipContent
                    align="start"
                    className="select-none max-w-80"
                  >
                    {shareMessage}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>

      {/* Sheet com formulário */}
      <SheetContent className="w-[400px] overflow-y-auto sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="select-none">Detalhes do Raid</SheetTitle>
        </SheetHeader>
        <div className="min-h-full px-1 mt-4 space-y-4">
          <div className="space-y-1">
            <Label className="select-none">Plataforma</Label>
            <Input value={platform} className="rounded-xl" />
          </div>
          <div className="space-y-1">
            <Label className="select-none">Data</Label>
            <Input value={formattedDate} className="rounded-xl" />
          </div>
          <div className="space-y-1">
            <Label className="select-none">URL</Label>
            <Input value={url} className="rounded-xl" />
          </div>
          <div className="space-y-1">
            <Label className="select-none">Mensagem</Label>
            <Input value={shareMessage} className="rounded-xl" />
          </div>
          <div className="space-y-1">
            <Label className="select-none">Conteúdo</Label>

            <Textarea
              className="w-full h-48 p-2 text-sm rounded-xl"
              value={editedContent}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type your markdown here..."
            />
          </div>

          <div className="space-y-1">
            <Label className="select-none">Pré visualização</Label>
            <div className="mt-3 max-h-[500px] select-none overflow-y-auto rounded-xl border border-[hsl(var(--border))] p-3">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {editedContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <SheetFooter className="pt-4 mt-auto select-none">
          <SheetClose asChild>
            <Button type="submit">Enviar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default RaidCard;
